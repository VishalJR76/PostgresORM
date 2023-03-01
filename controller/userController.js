const { log } = require('console');
const db=require('../connections/postgreSQL')
const User=db.User
const Op = db.Sequelize.Op;

async function newUser(req,res){
    console.log('raaj');
    const {firstName,lastName,email}=req.body
    try{
        const user = await User.create({ firstName, lastName, email });
        console.log('Hello')
        res.status(200).json({message:'Data created',user})
    }
    catch(err){
        console.error(err);
        res.status(500).send(err)
      }
}

module.exports= {newUser}
const Sequelize = require('sequelize');
const env = process.env
const sequelize = new Sequelize(env.DB, env.USER, env.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.User= require('../models/User')(sequelize,Sequelize)

module.exports=db
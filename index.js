const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
require('./models/User')
var userRouter = require('./router/userRouter')
app.use(express.json())

app.use(express.urlencoded({extended:true}))
const db = require('./connections/postgreSQL')

db.sequelize.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  console.log('hello')
app.use('/users',userRouter)
const PORT= process.env.PORT|| 6000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
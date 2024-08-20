//initialize sequalize fro database connection (mysql2)
const { Sequelize, DataTypes } = require("sequelize");

//defining the database and connection for mysql2
const sequelize = new Sequelize("haha", "root", "", {
  host: "localhost",  //username is root and default password is empty
  port: 3306, //default port of mysql
  dialect: "mysql", //mysql2 is used for mysql database(which dbs is used)
  operatorsAliases: false,
  pool:{
    max : 5,
    min :0,
    acquire : 3000,
    idle : 1000
  }

});

sequelize.authenticate()
.then(()=>{
  console.log("match");
})
.catch((err)=>{
  console.log("error",err);
})

const db={}
db.Sequelize=Sequelize //class
db.sequelize=sequelize


db.sequelize.sync({force: false}).then(()=>{
  console.log('sync done');
})

module.exports = db

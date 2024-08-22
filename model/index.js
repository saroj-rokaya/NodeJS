const { Sequelize, DataTypes } = require("sequelize");
const databaseConfig = require("../config/dbConfig");
const makeBlogTable = require("./blogModel");
const makeuserTable = require("./userModel.js");

const sequelize = new Sequelize(
  databaseConfig.db,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("match");
  })
  .catch((err) => {
    console.log("error", err);
  });

const db = {};
db.Sequelize = Sequelize; //class
db.sequelize = sequelize;

db.blogs = makeBlogTable(sequelize, DataTypes);
db.users = makeuserTable(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("sync done");
});

module.exports = db;

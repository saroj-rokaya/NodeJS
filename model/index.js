const { Sequelize, DataTypes } = require("sequelize");

const senquelize =new Sequelize("database","root","",{
    host: "localhost",
    port: 3306,
});


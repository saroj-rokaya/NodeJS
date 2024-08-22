const databaseConfig = {
  db: process.env.DB,
  username: process.env.USERNAME2,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: "mysql",
  port: 3306,
};

module.exports = databaseConfig;

require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("tis", "postgres", "0000", {
  host: process.env.host,
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database conntected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;

//import Sequelize, and the dotenv package
const Sequelize = require("sequelize");
require("dotenv").config();

//define sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306
    }
);

//export "sequelize"
module.exports = sequelize;
<<<<<<< HEAD
const Sequelize = require("sequelize");
require("dotenv").config();

//define sequelize
let sequelzie;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "127.0.0.1",
            dialect: "mysql",
            port: 3306
        }
)
};
=======
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}
>>>>>>> f26a954f6e52bd911b100c1c30ce96f397a3b528

module.exports = sequelize;
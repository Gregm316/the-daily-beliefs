//import Sequelize, and Models
const sequelize = require("../config/connection");
const { User, Character , Post} = require("../models");

const userData = require("./userData.json");
const characterData = require("./characterData.json");
const postData = require("./postData.json");

//define function to seed database
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Character.bulkCreate(characterData, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

//call seedDatabase function
seedDatabase();
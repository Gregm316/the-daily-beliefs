//first, import all other models
const User = require("./User");
const Character = require("./Character");
const Post = require("./Post");

// then, define relationships - has Many belongsTo, etc

// A User can have many Posts
User.hasMany(Post, {
    foreignKey: "user_id"
});

//A Character has many Posts
Character.hasMany(Post, {
    foreignKey: "character_id"
});

// //A Post has One Character???
// Post.hasOne(Character, {
//     foreign_key: "character_id"
// });

//A Post belongsTo a Character...and a User?

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.belongsTo(Character, {
    foreignKey: "character_id"
});


//export all models
module.exports = { User, Character, Post};







//export all the models
module.exports = { User, Character, Post }
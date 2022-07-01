//import model, datatypes
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type:DataTypes.STRING,
            allowNull: false
        },
        //foreign key the stores a reference for the Character that the Post is about
        character_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: "character",
                key: "id",
            }
        },
        //foreign key that stores a reference for the User the created the Post
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true, //set this to true to log timsestamp of each post
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

//export the Post model
module.exports = Post;
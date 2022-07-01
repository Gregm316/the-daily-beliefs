//import model, datatypes & bcrypt to encrypt user pw
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//import bcrypt for password
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      };
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // first_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // last_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,20]
            }
        }
        //add favorite_character_id? A user picks their favorite Marvel character
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
          },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)


//export the model User
module.exports = User;
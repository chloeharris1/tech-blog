const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // Must be at least 5 characters long
            validate: {
                len: [5]
            }
        },
        // Adding hooks for password hashing 
        hooks: {
            // set up a beforeCreate hook to hash the password before the object is created in the database
            // return the new userdata object
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 3);
                return newUserData;
            },
            // set up a beforeUpdate hook to hash the password before a user object is updated in the database
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 3);
                return updatedUserData;
            }
        },
        // pass in the imported sequelize connection to the database
        sequelize,
        // do not create 'created at' and 'updated at' timestamp fields
        timestamps: false,
        // do not pluralize database table name
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // keep model name as lowercase in the database
        modelName: 'user'
    }
);

module.exports = User; 
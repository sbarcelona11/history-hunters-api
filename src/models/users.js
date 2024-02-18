'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
            // define association here
            this.hasMany(models.Place, {as: "places", foreignKey: "userId"});
            this.hasMany(models.Found, {as: "founds", foreignKey: "userId"});
            this.hasMany(models.Comment, {as: "comments", foreignKey: "userId"});
            this.hasMany(models.Review, {as: "reviews", foreignKey: "userId"});
        }
    }

    Users.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
            timestamps: true,
            underscored: false
        }
    );
    return Users;
};

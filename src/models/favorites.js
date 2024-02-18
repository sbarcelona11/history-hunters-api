'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class model extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {as: "users", foreignKey: "userId"});
            this.belongsTo(models.Place, {as: "places", foreignKey: "placeId"});
            this.belongsTo(models.Found, {as: "founds", foreignKey: "placeId"});
        }
    }

    model.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        foundId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: "Favorite",
        timestamps: true,
        underscored: false,
    });
    return model;
};

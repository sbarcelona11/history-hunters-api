'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model {
        static associate(models) {
            this.belongsTo(models.User, {as: "users", foreignKey: "userId"});
            this.belongsTo(models.Place, {as: "places", foreignKey: "placeId"});
            this.belongsTo(models.Found, {as: "founds", foreignKey: "foundId"});
        }
    }

    Reviews.init(
        {
            review: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Review",
            timestamps: true,
            underscored: false,
        }
    );
    return Reviews;
};

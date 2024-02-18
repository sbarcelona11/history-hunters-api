'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {as: "users", foreignKey: "userId"});
            this.belongsTo(models.Place, {as: "places", foreignKey: "placeId"});
            this.belongsTo(models.Found, {as: "founds", foreignKey: "placeId"});
        }
    }

    Comments.init(
        {
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Comment",
            timestamps: true,
            underscored: false,
        }
    );
    return Comments;
};

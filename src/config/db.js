import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_STORAGE,
        define: {
            underscored: true,
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


export default db;
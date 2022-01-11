import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config({path:"variables.env"});

const db = new Sequelize(process.env.BD_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max:5,
        min:0,
        acquiere: 3000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;
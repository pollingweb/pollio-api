import { Sequelize } from 'sequelize';
import {
  DB_NAME,
  DB_HOST,
  DB_USER_NAME,
  DB_DIALECT,
  DB_PASSWORD,
} from "../config.js";

const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

export default sequelize;
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config()

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const {NAME, USER_NAME, PASSWORD, HOST} = process.env;
// Db configurations
export const DB_NAME = NAME;
export const DB_USER_NAME = USER_NAME;
export const DB_PASSWORD = PASSWORD;
export const DB_HOST = HOST;
export const DB_DIALECT = "mysql";

export const PORT = 4000
export const BASE_URL = `http://localhost:${PORT}`;
export const IMAGE_UPLOAD_DEST = "public/uploads/image";
export const UPLOAD_IMAGE_ROUTE = "uploads/image"
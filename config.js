import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// Db configurations
export const DB_NAME = "pollio";
export const DB_USER_NAME = "root";
export const DB_PASSWORD = "password";
export const DB_HOST = "localhost";
export const DB_DIALECT = "mysql";

export const PORT = 4000
export const BASE_URL = `http://localhost:${PORT}`;
export const IMAGE_UPLOAD_DEST = "public/uploads/image";
export const UPLOAD_IMAGE_ROUTE = "uploads/image"
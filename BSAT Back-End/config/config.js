import dotenv from "dotenv"

dotenv.config();

export const TEST = process.env.NODE_ENV === "test";
export const DEVELOPMENT = process.env.NODE_ENV === "development";

export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI;
export const MONGO_LOCAL_URI = process.env.MONGO_LOCAL_URI;
export const TWILLIO_AUTH_TOKEN = process.env.TWILLIO_AUTH_TOKEN;
export const TWILLIO_SERVICE_ID = process.env.TWILLIO_SERVICE_ID;
export const TWILLIO_ACCOUNT_SID = process.env.TWILLIO_ACCOUNT_SID;
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT? Number(process.env.SERVER_PORT) : 4000;


export const SERVER = {
    SERVER_HOSTNAME,
    SERVER_PORT,
    JWT_SECRET
}

export const MONGO = {
    MONGO_ATLAS_URI,
    MONGO_LOCAL_URI,
}

// import dotenv from "dotenv";

// dotenv.config();

// export const ENV_VARS = {
// 	MONGO_URI: process.env.MONGO_URI,
// 	PORT: process.env.PORT || 5000,
// 	JWT_SECRET: process.env.JWT_SECRET,
// 	NODE_ENV: process.env.NODE_ENV,
// 	TMDB_API_KEY: process.env.TMDB_API_KEY,
// };
import dotenv from 'dotenv';

dotenv.config(); // This loads environment variables from .env file

export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};


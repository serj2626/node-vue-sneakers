import dotenv from "dotenv";
dotenv.config();

class Settings {
  PORT = process.env.PORT || 3000;
  MONGO_URL = process.env.MONGO_URL;
  SECRET_KEY = process.env.SECRET_KEY;  
}

export default new Settings();

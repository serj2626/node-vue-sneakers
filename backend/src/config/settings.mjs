import dotenv from "dotenv";
dotenv.config();

class Settings {
  PORT = process.env.PORT || 3000;
  MONGO_URL = process.env.MONGO_URL;
}

export default new Settings();

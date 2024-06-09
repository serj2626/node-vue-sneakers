import express from "express";
import { corseMiddleware } from "./utils/middleware.mjs";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import settings from "./config/settings.mjs";
import router from "./routes/index.mjs";


const PORT = settings.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

mongoose
  .connect(settings.MONGO_URL)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

const app = express();
app
    .use(express.json())
    .use(corseMiddleware) 
    .use("/api", router)
  // .use("/images", express.static(path.join(__dirname, "../assets")))



app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});

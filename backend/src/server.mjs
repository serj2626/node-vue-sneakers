import express from "express";
import { corseMiddleware } from "./utils/middleware.mjs";
import mongoose from "mongoose";
import settings from "./config/settings.mjs";
import router from "./routes/index.mjs";

const PORT = settings.PORT;

const app = express();
app
  .use(express.json())
  .use("media", express.static("media"))
  .use(corseMiddleware)
  .use("/api", router);

function start() {
  mongoose
    .connect(settings.MONGO_URL)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log(err));
  app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
  });
}

start();

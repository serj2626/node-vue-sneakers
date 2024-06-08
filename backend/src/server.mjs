// import bodyParser from "body-parser";
import express from "express";
import { corseMiddleware } from "./utils/middleware.mjs";
import mongoose from 'mongoose';
import path from "path";
import { fileURLToPath } from 'url';
import settings from "./config/settings.mjs";

const PORT = settings.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


mongoose
    .connect(settings.MONGO_URL)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log(err));


const app = express();
app
    .use(express.json())
    .use("/images", express.static(path.join(__dirname, "../assets")))
    .use(corseMiddleware)




// app.get("/products", async (req, res) => {
//     const client = await MongoClient.connect(MONGO_URL,
//         { useUnifiedTopology: true, useNewUrlParser: true });
//     const db = client.db("sneakers_db");
//     const products = await db.collection("products").find({}).toArray();
//     res
//         .status(200)
//         .send(products);
//     client.close();
// });

// app.get("/products/:id", async (req, res) => {
//     let { id } = req.params;
//     id = +id;
//     const client = await MongoClient.connect(MONGO_URL,
//         { useUnifiedTopology: true, useNewUrlParser: true });
//     const db = client.db("sneakers_db");

//     if (isNaN(id)) return res.status(400).send({ msg: "Bad Request" });
//     const product = await db.collection("products").findOne({ id: id });
//     if (product) {
//         res.send({ "product": product });
//     } else {
//         res
//             .status(404)
//             .send(product);
//     }
//     client.close();
// });


// app.get("/uses:id/cart", (req, res) => {
//     res.send({ "message": "Hello World!" });
// });



app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});

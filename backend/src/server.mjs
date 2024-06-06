import bodyParser from "body-parser";
import express from "express";
import { MongoClient } from "mongodb";

const PORT = 3000;


const app = express();
app.use(express.json());



app.get("/products", async (req, res) => {
    const client = await MongoClient.connect("mongodb://localhost:27017",
        { useUnifiedTopology: true, useNewUrlParser: true });
    const db = client.db("sneakers_db");
    const products = await db.collection("products").find({}).toArray();
    res
        .status(200)
        .send(products);
});

app.get("/products/:id", (req, res) => {
    let { id } = req.params;
    id = +id;
    const product = products.find(product => product.id === id);
    res.send({ "product": product });
});

app.get("/uses:id/cart", (req, res) => {
    res.send({ "message": "Hello World!" });
});



app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});

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
    client.close();
});

app.get("/products/:id", async (req, res) => {
    let { id } = req.params;
    id = +id;
    const client = await MongoClient.connect("mongodb://localhost:27017",
        { useUnifiedTopology: true, useNewUrlParser: true });
    const db = client.db("sneakers_db");

    if (isNaN(id)) return res.status(400).send({ msg: "Bad Request" });
    const product = await db.collection("products").findOne({ id: id });
    if (product) {
        res.send({ "product": product });
    } else {
        res.status(404).send({ msg: "Product Not Found" });
    }
    client.close();
});


app.get("/uses:id/cart", (req, res) => {
    res.send({ "message": "Hello World!" });
});



app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});

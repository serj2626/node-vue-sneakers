import bodyParser from "body-parser";
import express from "express";
const PORT = 3000;

const products = [
    {
        id: 1,
        name: "Кроссовки Nike Venture Runner",
        material: "Синтетическая дышащая сетка",
        price: "8800",
        description: "shoes description",
        image:"shoes2.jpg",
        rating: "5"
    },
    {
        id: 2,
        name: "Кроссовки Niker",
        material: "Синтетическая дышащая сетка",
        price: "10500",
        description: "shoes description",
        image:"shoes3.jpg",
        rating: "5"
    },
    {
        id: 3,
        name: "Кроссовки adidas Sportswear STRUTTER",
        material: "Синтетическая дышащая сетка",
        price: "12600",
        description: "shoes description",
        image:"shoes4.jpg",
        rating: "5"
    },
    {
        id: 4,
        name: "Кроссовки adidas Galaxy Star M",
        material: "Синтетическая дышащая сетка",
        price: "11550",
        description: "shoes description",
        image:"shoes5.jpg",
        rating: "5"
    },
    {
        id: 5,
        name: "Кроссовки BAASPLOA",
        material: "Синтетическая дышащая сетка",
        price: "7700",
        description: "shoes description",
        image:"shoes7.jpg",
        rating: "5"
    },
    {
        id: 6,
        name: "Кроссовки PUMA Suede",
        material: "Синтетическая дышащая сетка",
        price: "3300",
        description: "shoes description",
        image:"shoes8.jpg",
        rating: "5"
    },
    {
        id: 7,
        name: "Кроссовки Lion and Sons",
        material: "Синтетическая дышащая сетка",
        price: "5890",
        description: "shoes description",
        image:"shoes2.jpg",
        rating: "5"
    },
    {
        id: 8,
        name: "Кроссовки PULSE",
        material: "Синтетическая дышащая сетка",
        price: "4400",
        description: "shoes description",
        image:"shoes2.jpg",
        rating: "5"
    },
]

const app = express();
app.use(express.json());



app.get("/products", (req, res) => {
    res.send({ "All products": products });
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

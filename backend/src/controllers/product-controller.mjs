import { Product } from "../models/product.mjs";
import { ProductNotAdded, ProductNotFound } from "../utils/exceptions.mjs";


const addProducts = (req, res) => {
    const product = new Product(req.body);
    product
        .save()
        .then((data) =>
            res.status(201).send({ msg: "movie was success created", movie: data })
        )
        .catch((err) => ProductNotAdded(res, err));
};

const getProducts = (req, res) => {
    Product.find()
      .sort({ price: 1 })
      .then((data) => res.json(data))
      .catch((err) => ProductNotFound(res, err));
  };


const getProductDetail = (req, res) => {
    let { id } = req.params;
    Product.findById(id)
      .then((data) => res.json(data))
      .catch((err) => ProductNotFound(res, err));
  };

const deleteProduct = (req, res) => {
    let { id } = req.params;
    Product.findOneAndDelete(id)
      .then((data) => res.json(data))
      .catch((err) => MovieNotFound(res, err));
  };
  
const updateProduct = (req, res) => {
    let { id } = req.params;
    Product.findByIdAndUpdate(id, req.body)
      .then((data) => res.json({ msg: "Movie was success updated" }))
      .catch((err) => MovieNotFound(res, err));
  };
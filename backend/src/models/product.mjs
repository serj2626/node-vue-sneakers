import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: String,
    material: String,
    description: String,
    image: String,
    rating: Number,
    price: Number,
    reviews: [
        {
            username: String,
            text: String,
        },
    ],
    likes: Number
});


export const Product = mongoose.model("Product", productSchema);

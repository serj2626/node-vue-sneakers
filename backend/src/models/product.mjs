import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    title: String,
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
    likes: {
        type: Number,
        default: 0
    }
});


export const Product = mongoose.model("Product", productSchema);

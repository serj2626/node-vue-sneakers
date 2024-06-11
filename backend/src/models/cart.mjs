import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    user:
    {
        type: Object,
        ref: "User",
    },
    products: [
        {
            productId: String,
            quantity: Number
        }
    ]
});

export const Cart = model("Cart", cartSchema);
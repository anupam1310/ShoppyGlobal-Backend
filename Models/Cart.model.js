import { Schema } from "mongoose";
import mongoose from "mongoose";
// Define the Cart schema
const cartSchema = new Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    user: { type: String, required: true }
});

let CartModel = mongoose.model('Cart', cartSchema);
export default CartModel;

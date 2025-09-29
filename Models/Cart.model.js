import { Schema } from "mongoose";
import mongoose from "mongoose";

const cartSchema = new Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
});

let CartModel = mongoose.model('Cart', cartSchema);
export default CartModel;

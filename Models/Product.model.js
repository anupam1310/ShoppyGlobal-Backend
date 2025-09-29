import { Schema } from "mongoose";
import mongoose from "mongoose";
// Define the Product schema
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discription: { type: String, required: true },
    stock: { type: Number, required: true },
});

let ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;
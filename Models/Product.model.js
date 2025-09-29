import { Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
});

let ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;
import { fetchAllProducts,fetchProductById } from "../Controller/product.controller";

function productrouter(app){
    app.get('/product', fetchAllProducts);
    app.get('/product/:id', fetchProductById);
};

export default productrouter;
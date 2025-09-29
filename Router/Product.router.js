import { fetchAllProducts,fetchProductById , createProduct} from "../Controller/product.controller.js";

function productrouter(app){
    app.post('/product', createProduct);
    app.get('/product', fetchAllProducts);
    app.get('/product/:id', fetchProductById);
};

export default productrouter;
import { fetchUserCart,addItemToCart, updateCartItem,removeItemFromCart } from "../Controller/cart.controller.js";
import { verifyToken } from "../Middleware/verify.middleware.js";

// Cart routes with token verification
function CartRouter(app){
    app.get('/cart', verifyToken, fetchUserCart);
    app.post('/cart', verifyToken, addItemToCart);
    app.put('/cart/:id', verifyToken, updateCartItem);
    app.delete('/cart/:id', verifyToken, removeItemFromCart);

}

export default CartRouter;
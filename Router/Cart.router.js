import { fetchAllCartItems,addItemToCart, updateCartItem,removeItemFromCart } from "../Controller/cart.controller";

function CartRouter(app){
    app.get('/cart', fetchAllCartItems);
    app.post('/cart', addItemToCart);
    app.put('/cart/:id', updateCartItem);
    app.delete('/cart/:id', removeItemFromCart);

}

export default CartRouter;
import CartModel from "../Models/Cart.model";
import ProductModel from "../Models/Product.model";

export async function fetchAllCartItems(req, res) {
    try {
        const cartItems = await CartModel.find();
        res.json(cartItems);
    } catch (error) {
        res.status(500).send('Error fetching cart items');
    }
}
export async function addItemToCart(req, res) {
    const { productId, quantity } = req.body;

    try {
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const cartItem = new CartModel({
            product: productId,
            quantity
        });
        CartModel.create(cartItem) ;
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).send('Error adding item to cart');
    }
}


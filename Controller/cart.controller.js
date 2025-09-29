import e from "express";
import CartModel from "../Models/Cart.model.js";
import ProductModel from "../Models/Product.model.js";

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
        let document =  await CartModel.create(cartItem);
        res.status(201).json(document);
    } catch (error) {
        res.status(500).send('Error adding item to cart');
    }
}

export async function updateCartItem(req, res) {
    const cartItemId = req.params.id;
    const { quantity } = req.body;

    try {
        const updatedCartItem = await CartModel.findByIdAndUpdate(cartItemId, { quantity }, { new: true });
        if (!updatedCartItem) {
            return res.status(404).send('Cart item not found');
        }
        res.json(updatedCartItem);
    } catch (error) {
        res.status(500).send('Error updating cart item');
    }
}

export async function removeItemFromCart(req, res) {
    const cartItemId = req.params.id;
    try {
        const deletedCartItem = await CartModel.findByIdAndDelete(cartItemId);
        if (!deletedCartItem) {
            return res.status(404).send('Cart item not found');
        }
        res.json({ message: 'Cart item removed successfully' });
    } catch (error) {
        res.status(500).send('Error removing cart item');
    }
}

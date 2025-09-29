import CartModel from "../Models/Cart.model.js";
import ProductModel from "../Models/Product.model.js";


// Fetch all cart items for a user
export async function fetchUserCart(req, res) {
    const userId = req.user.id;
    // console.log(userId);
    //using userid to filter cart items
    try {
        const cartItems = await CartModel.find({ user: userId });
        // console.log(cartItems);
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).send('Error fetching cart items ' + error.message);
    }
}
// Add an item to the cart
export async function addItemToCart(req, res) {
    // Validate request body
    const { productId, quantity } = req.body;
    const userId = req.user.id;
    // console.log(req.body);
    try {

        const product = await ProductModel.findById(productId);
        // console.log(product);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        // Check if the item already exists in the cart
        let cartItem = await CartModel.findOne({ user: userId, productId: productId });
        // console.log(cartItem);
        if (cartItem) {
            cartItem.quantity += Number(quantity);
            await cartItem.save();
            res.status(200).json(cartItem);
        } else {
            const newCartItem = await CartModel.create({
                user: userId,
                productId: productId,
                quantity: quantity
            });
            res.status(201).json(newCartItem);
        }
    } catch (error) {
        res.status(500).send(`Error adding item to cart: ${error.message}`);
    }
}
// Updating the quantity of a cart item
export async function updateCartItem(req, res) {
    const cartItemId = req.params.id;
    const { quantity } = req.body;
    const userId = req.user.id;

    try {
        const updatedCartItem = await CartModel.findOneAndUpdate(
            { _id: cartItemId, user: userId },
            { quantity },
            { new: true }
        );
        if (!updatedCartItem) {
            return res.status(404).send('Cart item not found or permission denied.');
        }
        res.status(200).json(updatedCartItem);
    } catch (error) {
        res.status(500).send('Error updating cart item' + ` ${error.message}`);
    }
}
// Remove an item from the cart
export async function removeItemFromCart(req, res) {
    const cartItemId = req.params.id;
    const userId = req.user.id;
    try {
        const deletedCartItem = await CartModel.findOneAndDelete({ _id: cartItemId, user: userId });
        if (!deletedCartItem) {
            return res.status(404).send('Cart item not found or permission denied.');
        }
        res.status(200).send({message:"Item deleted successfully"});
    } catch (error) {
        res.status(500).send('Error removing cart item' + ` ${error.message}`);
    }
}
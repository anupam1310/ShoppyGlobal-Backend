import ProductModel from "../Models/Product.model.js";

export async function createProduct(req, res) {
    const newProduct = req.body;

    try {
        const savedProduct = await ProductModel.create(newProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).send(`Error creating product : ${error.message}`);
    }
}

export async function fetchAllProducts(req, res) {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
}

export async function fetchProductById(req, res) {
    const productId = req.params.id;
    try {
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (error) {
        res.status(500).send('Error fetching product');
    }
}


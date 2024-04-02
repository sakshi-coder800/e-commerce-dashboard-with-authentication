import Product from "../model/product.js";

export const addProduct = async (req, res) => {
    try {
        // Create a new product instance using the request body
        let product = new Product(req.body);

        // Save the product to the database
        let result = await product.save();

        // Send a success response with the saved product object
        res.status(201).send({ message: "Product added successfully", product: result });
    } catch (error) {
        // Log the error details for debugging purposes
        console.error("Error occurred while adding product:", error);

        // Send a user-friendly error message in the response
        res.status(500).send({ message: "Failed to add product" });
    }
};
// list product // show all products
export const getProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        let products = await Product.find({});

        // Check if products were found
        if (products.length > 0) {
            // Send a success response with the products
            res.status(200).send({ message: "All products", products });
        } else {
            // Send a response indicating no products found
            res.status(200).send({ message: "No products found", products: [] });
        }
    } catch (error) {
        // Log the error details for debugging purposes
        console.error("Error occurred while fetching products:", error);

        // Send a user-friendly error message in the response
        res.status(500).send({ message: "Failed to fetch products" });
    }
};
// Delete API
export const deleteProduct = async (req, res) => {
    try {
        // Delete the product from the database based on the product ID
        const result = await Product.deleteOne({ _id: req.params.id });

        // Check if the product was successfully deleted
        if (result.deletedCount > 0) {
            // Send a success response if the product was deleted
            res.status(200).send({ message: "Product deleted successfully" });
        } else {
            // Send a response indicating that the product with the provided ID was not found
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        // Log the error details for debugging purposes
        console.error("Error occurred while deleting product:", error);

        // Send a user-friendly error message in the response
        res.status(500).send({ message: "Failed to delete product" });
    }
};
// get single product
export const getProduct = async (req, res) => {
    try {
        // Fetch the product from the database based on the product ID
        let product = await Product.findOne({ _id: req.params.id });

        // Check if product was found
        if (product) {
            // Send a success response with the product
            res.status(200).send(product);
        } else {
            // Send a response indicating that the product with the provided ID was not found
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        // Log the error details for debugging purposes
        console.error("Error occurred while fetching product:", error);

        // Send a user-friendly error message in the response
        res.status(500).send({ message: "Failed to fetch product" });
    }
};
// update product
export const updateProduct = async (req, res) => {
    try {
        // Update the product in the database based on the product ID
        let result = await Product.updateOne({ _id: req.params.id }, { $set: req.body });

        // Check if the update operation was successful
        if (result) {
            // Send a success response if the product was updated
            res.status(200).send({ message: "Product updated successfully" });
        } else {
            // Send a response indicating that the product with the provided ID was not found
            res.status(404).send({ message: "Product not found or no changes were made" });
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error occurred while updating product:", error);

        // Send a user-friendly error message in the response
        res.status(500).send({ message: "Failed to update product" });
    }
};
// search product
export const searchProduct = async (req, res) => {
    try {
        // Search for products in the database based on the search key provided in the request parameters
        let result = await Product.find({
            "$or": [
                { name: { $regex: req.params.key, $options: "i" } }, // Case-insensitive search for product name
                { company: { $regex: req.params.key, $options: "i" } }, // Case-insensitive search for company name
                { category: { $regex: req.params.key, $options: "i" } }, // Case-insensitive search for category
                { price: { $regex: req.params.key, $options: "i" } }, // Case-insensitive search for price
            ]
        });
        // Send the search results to the client
        res.status(200).send(result);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error occurred while searching for products:", error);

        // Send a user-friendly error message in the response
        res.status(500).send({ message: "Failed to search for products" });
    }
};

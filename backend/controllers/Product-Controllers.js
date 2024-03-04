import Product from "../model/product.js";


import Product from "../models/Product.js";

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

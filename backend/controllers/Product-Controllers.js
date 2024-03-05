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

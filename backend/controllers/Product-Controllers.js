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

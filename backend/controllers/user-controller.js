import User from "../model/User.js";

export const registerUser = async (req, res) => {
    // Create a new user instance using the request body
    let user = new User(req.body);
    
    try {
        // Save the user to the database and await the result
        let result = await user.save();
        // Send a success response with the saved user object
        res.status(201).send({ message: "User registered successfully", user: result });
    } catch (error) {
        // If an error occurs during the save operation, send an error response
        res.status(500).send({ message: "Failed to register user", error: error });
    }
};


export const loginUser = async (req, res) => {
    try {
        // Find the user based on the request body (e.g., email and password)
        const user = await User.findOne(req.body).select("-password");

        // If user is not found, send an appropriate error response
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Send the user data (excluding password) in the response
        res.status(200).send(user);
    } catch (error) {
        // Handle errors with a generic error message
        console.error("Error occurred while logging in:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

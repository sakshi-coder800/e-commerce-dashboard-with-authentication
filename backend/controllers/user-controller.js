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

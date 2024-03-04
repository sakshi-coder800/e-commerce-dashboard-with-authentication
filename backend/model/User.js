import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Export the model directly
export default mongoose.model("User", userSchema);
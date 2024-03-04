import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    category:String,
    userId:String,
    company:String,
});

// Export the model directly
export default mongoose.model("Product", productSchema);
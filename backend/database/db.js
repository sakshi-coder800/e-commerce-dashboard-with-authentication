import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/e-comm-dashboard');
    console.log("Connection Successfully");
  } catch (error) {
    console.error("Connection Failed ", error);
  }
}

export default DBConnect;

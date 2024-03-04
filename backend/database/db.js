import mongoose from "mongoose";

const DBConnect = async (username,password) => {
  // const URL= `mongodb+srv://${username}:${password}@cluster0.eackzhq.mongodb.net/E-COMM-DASHBOARD`
  try {
    await mongoose.connect('mongodb://localhost:27017/e-comm-dashboard');
    // await mongoose.connect(URL);

    console.log("Connection Successfully");
  } catch (error) {
    console.error("Connection Failed ", error);
  }
}

export default DBConnect;

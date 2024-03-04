import express from 'express';
// import { registerUser, loginUser } from '../controllers/user-controller.js';
import { addProduct } from '../controllers/Product-Controllers.js';


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("product routes")
})


router.post("/add-product",addProduct)

export default router;
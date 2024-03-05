import express from 'express';
import { addProduct, getProducts } from '../controllers/Product-Controllers.js';


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("product routes")
})


router.post("/add-product",addProduct)
router.get("/products",getProducts)

export default router;
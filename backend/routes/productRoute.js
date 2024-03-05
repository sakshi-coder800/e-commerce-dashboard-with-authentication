import express from 'express';
import { addProduct, getProducts,deleteProduct } from '../controllers/Product-Controllers.js';


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("product routes")
})


router.post("/add-product",addProduct)
router.get("/products",getProducts)
router.delete("/product/:id",deleteProduct)

export default router;
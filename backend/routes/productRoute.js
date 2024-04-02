import express from 'express';
import { addProduct, getProducts,deleteProduct ,getProduct,updateProduct, searchProduct} from '../controllers/Product-Controllers.js';
import { verifyToken } from '../middleware/auth.js';


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("product routes")
})


router.post("/add-product",verifyToken, addProduct)
router.get("/products",verifyToken, getProducts)
router.delete("/product/:id",verifyToken,deleteProduct)
router.get("/product/:id",verifyToken,getProduct)
router.put("/product/:id",verifyToken,updateProduct)
router.get("/search/:key", verifyToken, searchProduct)
// create middlewares
export default router;
import express from 'express';
import { registerUser, loginUser } from '../controllers/user-controller.js';


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello world")
})


router.post("/register",registerUser)
router.post("/login",loginUser)

export default router
import express, { application } from 'express';
import { registerUser } from '../controllers/user-controller.js';


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello world")
})


router.post("/register",registerUser)

export default router
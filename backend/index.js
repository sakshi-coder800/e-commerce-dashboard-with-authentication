import express from 'express';
import colors from 'colors';
import DBConnect from './database/db.js';
import router from './routes/UserRoute.js';
import dotenv from 'dotenv'
import cors from 'cors'


const app= express();
dotenv.config();
app.use(express.json())
app.use(cors());

//  create routess 
app.use("/",router)
const port=8080;
const username=process.env.USERNAME;
const password=process.env.PASSWORD;

DBConnect(username,password);
app.listen(port,()=>console.log(`Server running on port ${port}`.bgGreen.white))

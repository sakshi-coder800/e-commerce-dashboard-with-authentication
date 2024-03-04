import express from 'express';
import colors from 'colors';
import DBConnect from './database/db.js';

const app= express();

const port=8080;
DBConnect();
app.listen(port,()=>console.log(`Server running on port ${port}`.bgGreen.white))

import express from 'express';
import colors from 'colors';

const app= express();

const port=8080;

app.listen(port,()=>console.log(`Server running on port ${port}`.bgGreen.white))

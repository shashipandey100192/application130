const express = require('express');
const myapp = express();
require('dotenv').config();
const port = process.env.port || 8900


myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
});

myapp.get("/about",(req,res)=>{
    res.send("welcome to about js");
});



myapp.listen(port,()=>{
    console.log(`server is runnning ${port}`);
})
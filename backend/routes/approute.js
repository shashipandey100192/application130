const express = require('express');
const myapp = express.Router();



myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
});

myapp.get("/about",(req,res)=>{
    res.send("welcome to about js");
});


module.exports = myapp
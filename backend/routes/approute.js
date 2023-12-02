'Access-Control-Allow-Origin'
const express = require('express');
const myapp = express.Router();
const mypattern = require('../schimatype/scima');




myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
});

myapp.get("/about",(req,res)=>{
    res.send("welcome to about js");
});

myapp.get("/alldata",async(req,res)=>{
    const datalist = await mypattern.find();
    res.json(datalist);
    console.log(datalist);
});



module.exports = myapp
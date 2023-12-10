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

/*get all data api */
myapp.get("/alldata",async(req,res)=>{
    const datalist = await mypattern.find();
    res.json(datalist);
    console.log(datalist);
});

/*post data from client api */
myapp.post("/create",async(req,res)=>{
    const {email,phone,gender,pass,dob,profile} = req.body;
    const adduser = new mypattern({
        email,phone,gender,pass,dob,profile
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
});

/*single user api*/
myapp.get("/details/:id",async(req,res)=>{
    const {id} = req.params;
    const singleuser = await mypattern.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});


myapp.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const deleterecord = await mypattern.findByIdAndDelete({_id:id});
    console.log(deleterecord);
    res.status(201).json(deleterecord);
});




myapp.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mypattern.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});




module.exports = myapp
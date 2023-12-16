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


/* login api */

myapp.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
      
    if(!email || !pass){
        return res.status(422).json({error:"user and password don't match"});
       
    }
    else{
        const uservalidation = await mypattern.findOne({email:email});
        console.log(uservalidation);
        if(uservalidation.email===email && uservalidation.pass===pass)
        {
            res.status(200).json({message:'welcome',status: 201}); 
        }
        else{
            res.status(250).json({error:"password not match"});
        }
    }
});




module.exports = myapp
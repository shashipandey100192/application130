const mongodb = require('mongoose');
    
const schimatype = new mongodb.Schema({
    email:{
        type:String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    pass:{
        type:String
    }

    });



const mydatatype = new mongodb.model("weeekend130data",schimatype);
module.exports = mydatatype;


const mongodb = require('mongoose');
const db = "mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/mydatabase";

mongodb.connect(db)
.then(()=>console.log("connection start"))
.catch((error)=> console.log(error.message));
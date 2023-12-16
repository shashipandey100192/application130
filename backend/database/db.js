
const mongodb = require('mongoose');
const db = process.env.DATABASE;
const localdb = "mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/mydatabase";

mongodb.connect(db || localdb)
.then(()=>console.log("connection start"))
.catch((error)=> console.log(error.message));
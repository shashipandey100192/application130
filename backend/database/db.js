
const mongodb = require('mongoose');
const db = process.env.DATABASE;

mongodb.connect(db)
.then(()=>console.log("connection start"))
.catch((error)=> console.log(error.message));
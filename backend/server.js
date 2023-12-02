const express = require('express');
const myapp = express();
const cors = require('cors');
require('./database/db');
const myappa = require('./routes/approute');
require('dotenv').config();
const port = process.env.port || 8900





myapp.use(express.json());
myapp.use(myappa);
myapp.use(cors());



myapp.listen(port,()=>{
    console.log(`server is runnning ${port}`);
})
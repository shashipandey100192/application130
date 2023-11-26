const express = require('express');
const myapp = express();
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database/db');
const myappa = require('./routes/approute');


require('dotenv').config();
const port = process.env.port || 8900




myapp.use(myappa);


myapp.listen(port,()=>{
    console.log(`server is runnning ${port}`);
})
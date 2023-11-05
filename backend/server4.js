const http =require('http');
const path = require('path');
const fs = require('fs');


const myserver = http.createServer((req,res)=>{
     if(req.url=='/')
     {
        fs.readFile('./public/index.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        })
     }
     else if(req.url.match("\.css$"))
    {
        var filepath = path.join(__dirname,"public",req.url);
        var filetype = fs.createReadStream(filepath,"UTF-8");
        res.writeHead(200,{"Content-Type":"text/css"});
        filetype.pipe(res);
    }
    else if(req.url=="/about")
    {
        fs.readFile('./public/about.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        })
    }
   
});


myserver.listen(5000,(req,res)=>{
    console.log("server is running");

})









const http =require('http');

const myserver = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.write("<h1>this is home page install nodemon</h1>");
        res.end();
    }
    else if(req.url=="/about")
    {
        res.write("<h1>This is About pagerrrrr</h1>");
        res.end();

    }
    else
    {
        res.write("<p>Page Not Found</p>");
        res.end();
    }
   
});


myserver.listen(5000,(req,res)=>{
    console.log("server is running");

})









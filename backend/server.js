const http =require('http');

const myserver = http.createServer((req,res)=>{
    res.write("<h1>welcome</h1>");
    // res.write("<h2>this is second heading</h2>");
    // res.write("<h2>this is second headingdsfs fsdfsdf</h2>");
    // res.write(`<h1>welcome</h1><h1>welcome</h1><h1>welcome</h1><h1>welcome</h1><h1>welcome</h1>`);
    res.write(`<h1 style='color:red'> this is first heading</h1>`)
   
    res.end();
});


myserver.listen(5000,(req,res)=>{
    console.log("server is running");

})









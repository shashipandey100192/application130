var a = 800;
console.log(a);

setTimeout(()=>{
    var b = 40;
    var c=90;
    var d = b*c;
    console.log(d);
    setTimeout(()=>{
        var x=500;
        console.log(x);
    },2000);

},1000);



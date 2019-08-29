let express= require('express');

let app= express();

app.get("/", function(req,res){
res.send("hello");
});

app.get("/about",function(req,res){
    res.send("this is the about page");
});

app.get("/login",function(req,res){
    res.send("this is the login page");
})

app.listen(8080);
console.log("running");

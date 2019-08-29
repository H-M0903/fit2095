let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let db = [];

app.engine ("html",require("ejs").renderFile);
app.set("view engine",'html');

app.use(express.static('images'));
app.use(express.static('styles'));

app.use(bodyParser.urlencoded({
    extended: false
}))



app.get("/",(req,res)=>{
    res.render("index.html");
});

app.get("/addTask.html",(req,res)=>{
    res.render("addTask.html");
});
app.get("/allTask.html",(req,res)=>{
    res.render("allTask.html", {tasks: db});
});


app.post("/newTask", (req,res)=>{
    db.push(req.body);
    res.render("addTask.html", {tasks: db});
});

app.listen(8080);

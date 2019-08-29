let express = require('express');
let app = express();
let morgan= require('morgan');

let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static('images'));
// app.use(function(req,res){
//     console.log("hello from middleware.......1");
//     next();
    
// })
// app.use(function(req,res){// if u had /about it will only work when localhost/8080/aboutc
//     console.log("hello from middleware.......2");
//     next();//continues the handeling of the request 
    
// })

app.use(morgan('short'));//retrieves info about the servr and returns it 
app.use(bodyParser.urlencoded({
    extended: false//dont extend to other data types 
}));


app.get('/', function(req, res){
    console.log("I am inside app.get");
    res.sendFile('index.html')
    
    // res.send("welcome to week 4 lecture stuff")
});

app.post('/data',function(req,res){
    console.log("I got a post request");
    console.log(req.body);
    
    

}); 

app.listen(8081);
// add your own function that will handle the processing 
//adding some info to a data, like adding a time or translating the language 
//the midddleware will interrupt the flow of the request and then capture the process 
//add what you want then continue with your process 

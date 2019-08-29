let express = require("express");
let app = express();// app becomes a new instance 
let db = [];

app.get('/', function(req,res){
    res.send("Hi :) welcome to this weeks lab (it's lab 3 ;) )");
});

// function generateId(){
//     let id; 
//     id = Math.round(Math.random()*1000);
//     return id;
// };

app.get('/addItem/:name/:quantity/:price',function(req,res){
    let object={
        id:Math.round(Math.random()*1000),
        name: req.params.name,
        quantity: req.params.quantity,
        price: req.params.price


    }
    db.push(object);
    res.send("the item has been added :))")
    // res.send("the id is:"+id);
    // res.send("the name is:"+req.params.name);
    // res.send("the quantity is:"+req.params.quantity);
    // res.send("the price is:"+req.params.price);
});

// let item={
//     id: 5,
//     name: "TV",
//     quantity: 30,
//     price: 1500
// };
// db.push(item);
app.get('/output',function(req,res){
let blank = "";
for( let i =0; i<db.length; i++){
    blank += db[i].id + " | " + db[i].name + " | " + db[i].quantity + " | " + db[i].price + " | " + (parseFloat(db[i].price)*parseFloat(db[i].quantity)) + "</br>"
}
res.send(blank);
});

function removeNumber (numArray, numToDel){
    let index = numArray.indexOf(numToDel);
    numArray.splice(index,1);
    return index;
}

app.get('/delNum/:numToDel',function(req,res){
    removeNumber(db, Number(req.params.numToDel));
    res.send('num deleted is '+ req.params.numToDel);
});

app.get('/warehouseVal', function(req,res){
    let s = "";
    let num = 0;
    for(let i = 0; i<db.length;i++){
        num = num+ db[i].quantity*db[i].price;
    }

    s = "The warehouse value is "+ num;

    res.send(s);

});
app.listen(8080);

let express = require("express");
let app = express();
let db = [];

app.get('/addnumber/:numToAdd',function(req,res){
    console.log('number',req.param.numToAdd);
    db.push(Number(req.params.numToAdd));
    console.log('db',db);
    
    res.send('the number added to the db is'+req.params.numtoAdd);
})
app.get('/getTotal',function(req,res){
    const sum = getTotal(db);
    console.log('sum====>>',sum);
    res.send('the sum of all numbers in the db are '+sum);
    
})

// app.get('/deleteNum',function(req,res){

// })

app.get('/printToWeb',funtion(req,res){
    res.send("the bnum in the db is "+db)
})
app.listen(4000);

function getTotal(numArray){
    let total = 0;
    numArray.forEach(number =>{
        total+=number;
    });
    return total;
}

function deleteNum(numArray,numTodel){

    // if index >-1{
    //     numArray.splice(index,1);
    // }
    // return;

}

function printToWeb(numArray){
    var i; 
    for(i==0;i <= numArray.length;i++){
        console.log(numArray[i]);
        
    }
    return; 
}


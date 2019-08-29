// console.log("step 1"); //execution starts from hereb

// setTimeout(() => {// this is a blocking statement, sends it to the kitchen and continues 
//     console.log("step 2");// when the meal arrives, step 2 then it serves everything together 
    
// }, 2000);

// console.log("step 3");// if step 3 depends on step 2, the ouput of step 2 is the input to step 3, then we have to do  a callback 
//output = step 1, step 3, step 2 
//set interval and a function to delay as well 

let http=require('http');
let fs=require('fs');

http.createServer(function(rquest,response){
    let url=request.url;
    console.log(url);
    

    let fileName = "./index.html";
    fs.readFile(fileName,function(error,content){
        
        response.write(content);
        response.end();
    

    });
    
   
}).listen(8080);

console.log("I am listening to port 8080");

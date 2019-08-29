var http = require('http');
var fs = require('fs');
var fileName = "login.html";
var url = require ('url');
let qs =require('querystring');

http.createServer(function (request, response){
  let url=request.url;
  if(request.method==="POST"){
    let body = "";
    request.on("data", chunk=>{
      body +=chunk.toString(); 
    });
    request.on("end", ()=>{
      let data = qs.parse(body);
      console.log(data);
      let password = data.password;
      let username = data.username; 
      if(data.username == "admin" && data.password== "password"){
        fileName= "mainpage.html";
      }
      else{
        fileName= "accessdenied.html";
      }
    
      fs.readFile("./login.html",function(error,content){
        if(error){
          console.log(error);
          
        }
        else{
          response.writeHead("200",{
            "content-type": "text/html"
          });
        }

      })

    })
    
  }
  else if(url==="/"){
    let fileName="login.html";
    fs.readFile(fileName, function (error, content) {
      response.writeHead(200, {
          'Content-Type': 'text/html'
      });
      response.end(content, 'utf-8');
   });

  }
}).listen(8080);
console.log("running")


// let please = url.parse(request.url,true).query;
// fileName = "login.html"
// if((please.username === "admin")&&(please.password === "pass")){
// fileName= "mainpage.html";
// }
// else{
//   fileName="accessdenied.html"
// }


var ar = [];
// JS is super dynamic it has N cells, it takes in any datatype 

ar.push(20);
ar.push("fit2095");
ar.push(true);
ar.push([-10,44]);

//console.log(ar);

for(var i= 0; i<ar.length;i++){
    console.log(ar[i]);
    
}

ar.forEach(function(item,index,arr){
    if(index%2==0)
   console.log(index+ " - " + item);
   else console.log("hi");
   
});

try{
    //do something 


}catch(err){
    //if error occures, execution jumps here 
    //try again 
}



//callbacks , 2 diff logics 
function f1(item) {
    console.log("Hello from F1"+item);
    
}
function f2(item) {
    console.log("sup from F2"+item);
    
}
function mainFunc (value,callback) {
    //processing on value 

    
    value= value+ "fit2095";
    callback(value) 
}
mainFunc("ABC",f1);//callback becomes a reference to another name 
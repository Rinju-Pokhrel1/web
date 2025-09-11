let a =prompt("Enter first number");
let b =prompt("Enter second number");

let sum =parseInt(a)+parseInt(b);
if(isNaN(a)||isNaN(b)){
    throw syntaxError("syntax error ");
}
function main(){
let x=2;

try{
    console.log("The sum of two numbers is " ,sum*x);

}catch(error){
    console.log("The error is "+error);
}  
// finally use return vyesi ne final block dekhauna use garenxa
finally{
    console.log("The try catch block is finished");
}   
}
main();
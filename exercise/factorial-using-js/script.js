let a = 3;

function factorial(number) {
    //array
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1,).reduce((a, b)=> a * b);
    return c;
}
// console.log(factorial(a));
function facfor(number) {
    let fac=1;
 for (let i=1;i<=number;i++){
     fac=fac*i;
 }
 return fac;
}
factorial(a);
console.log(factorial(a));
console  
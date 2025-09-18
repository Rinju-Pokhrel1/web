// Fixed sleep function
async function sleep() {
  return new Promise((resolve) => setTimeout(() => resolve(45), 1000));
}

// Normal function
function sum(a, b) {
  return a + b;
}

// IIFE: Immediately Invoked Async Function
(async function main() {
  let a = await sleep();
  console.log(a);  
  let b = await sleep();
  console.log(b);  
})();


// Destructuring
let [x, y] = [1, 5];
console.log(x, y); 

// Using rest operator
let [p, q, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(p, q, rest); 

// Object destructuring
let obj = { a: 1, b: 2, c: 3, d: 4 };
let { a, b } = obj;
console.log(a, b); 


// Spread operator
let arr = [1, 2];
console.log(sum(...arr));  

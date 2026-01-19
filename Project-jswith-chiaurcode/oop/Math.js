//value of pi is constant why ? can we create or define the property by ourself


console.log(Math.PI)

Math.PI = 5;
console.log(Math.PI)// op is not changed 


let obj = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(obj)

//op
// all  value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false


const obj1 = {
    "name": "Rinju",
    "class": "bachelor",
    "isavailable": "True"

}
// console.log(Object.getOwnPropertyDescriptor(obj1, "name")); //here i get all true 

//we can defined  some property ourself 

Object.defineProperty(obj1, "name", {
    writable: false,
    enumerable: false,
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(obj1, "name"));
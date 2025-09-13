// var a= 5
// var b=6
// var c="rinju" 
// console.log(a+b)
// console.log(typeof(a), typeof(b) ,typeof(c))

// //here rinju is string  so var c="rinju" is invalid

// here we use let and const instead of var
let a=5
let b=6
let c="rinju"
console.log(a+b)
console.log(typeof(a), typeof(b) ,typeof(c))
console.log(a+b+c) // in this case it will consider as string and concatenate the value
console.log(c+a+b) // in this case it will consider as string and concatenate the value

const pi=3.14
// pi=3.15 // it will give error because we cannot change the value of const variable
console.log(pi)

// we can use camelCase for variable name
let firstName="rinju"
let lastName="pokhrel"
console.log(firstName+" "+lastName)

// we cannot use reserved keywords as variable name
// let let=5 // it will give error

// we cannot start variable name with number
// let 1a=5 // it will give error

// we can use _ and $ in variable name
let _name="rinju"
let $name="pokhrel"
console.log(_name+" "+$name)

// variable names are case sensitive
let Name="hello"
let name="world"
console.log(Name+" "+name)

// we cannot use space in variable name
// let first name="rinju" // it will give error

// we can declare multiple variables in one line
let x=5, y=6, z=7
console.log(x+y+z)

// we can declare variable without initializing
let p
console.log(p) // it will give undefined

p=10
console.log(p) // now it will give 10

// we can reassign value to variable declared with let
p=20
console.log(p) // now it will give 20

// we cannot reassign value to variable declared with const
const q=30
console.log(q) // it will give 30
// q=40 // it will give error

// we can declare multiple const variables in one line
const r=50, s=60, t=70
console.log(r+s+t)

// we can declare const variable without initializing
// const u // it will give error
// console.log(u)

// we can use var, let and const to declare variable
var v=80
let w=90
const x1=100
console.log(v+w+x1)

// we can use typeof operator to check the type of variable
console.log(typeof(v), typeof(w), typeof(x1))

// we can use alert to show the value of variable
// alert(v) // it will show alert box with value 80

// we can use prompt to take input from user
// let name1=prompt("Enter your name:")
// console.log("Hello "+name1)

// we can use confirm to take confirmation from user
// let isConfirmed=confirm("Are you sure?")
// console.log(isConfirmed) // it will give true if user clicks on OK and false if user clicks on Cancel
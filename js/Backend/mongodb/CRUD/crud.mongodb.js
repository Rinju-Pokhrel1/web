use("crudDB")
db.createCollection('courses')

db.courses.insertOne({
    name:"rinju web course",
    price:0,
    project:4,
})
db.courses.insertMany([
    { name: "HTML & CSS", price: 0, projects: 2 },
    { name: "JavaScript Basics", price: 10, projects: 3 },
    { name: "Node.js", price: 20, projects: 2 },
    { name: "Express.js", price: 15, projects: 2 },
    { name: "MongoDB", price: 15, projects: 1 },
    { name: "React.js", price: 25, projects: 3 },
    { name: "Next.js", price: 30, projects: 2 },
    { name: "TypeScript", price: 20, projects: 2 },
    { name: "Python Basics", price: 10, projects: 1 },
    { name: "Django", price: 25, projects: 2 }
])


let a=db.courses.find({price:0})
console.log(a)
console.log(a.toArray())

// let a =db.courses.findOne({price:0})
// console.log(a)
// // console.log(a.toArray())

//update
// db.courses.updateOne(
//     { price: 0 },           // filter: find document(s) where price is 0
//     { $set: { price: 100 } } // update: set price to 100
// // );
// db.courses.updateMany(
//     { price: 0 },           // filter: find document(s) where price is 0
//     { $set: { price: 100 } } // update: set price to 100
// );
// // 

// //delete 
// db.courses.deleteOne(
//     { price: 100 })           // filter: find document(s) where price is 0

    

//  const { error } = require("console")
const fs=require("fs")
//  console.log(fs)

 //create file 
//  console.log("starting")
//  fs.writeFileSync("rinju.txt","Rinju is a good girl")
//  console.log("ending")

//  //best approach
//   console.log("starting")
//  const fs = require("fs");

// console.log("starting");

// fs.writeFile("rinju.txt", "Rinju is a good girl", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File write done");

//   fs.readFile("rinju.txt", (error, data) => {
//     if (error) {
//       console.error("Error reading file:", error);
//       return;
//     }
//     console.log("File content:", data.toString());
//   });
// });

// console.log("ending");

const fs = require("fs")
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("rinju.txt", "Rinju is a good boy")

fs.writeFile("rinju.txt", "Rinju is a good girl", ()=>{
    console.log("done")
    fs.readFile("rinju.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("rinju.txt", "rinjurobo", (e, d)=>{
    console.log(d)
})

console.log("ending")

// const promiseOne =new Promise (function(resolve,reject){

//   setTimeout(function(){
//     console.log("Async taks is completed.");
    
//   },1000)
// }
// );

// promiseOne.then(function(){
//   console.log("Promise is resolved");
// })

// // without declare the variable to store the promise
// new Promise (function(resolve,reject){

//   setTimeout(function(){
//     console.log("Async task 2 is completed.");
//     resolve();
//   },2000)
// }
// ).then(function(){
//   console.log("Promise 2 is resolved");
// })


// //promise with the resolve -object
// const promiseThree = new Promise (function(resolve,reject){

//   setTimeout(function(){
//     resolve({userName:"Chiaur",userAge:24});
//   },1000)
// }).then(function(user){     
//     console.log("promise 3 is resolved");
//     console.log(user.userName);
//     console.log(user.userAge);
// })


// //chaining of promises with then and catch
// const promiseFour = new Promise (function(resolve,reject){

//   setTimeout(function(){
//     resolve(10);
//   },1000)
// }).then(function(user){     
//     console.log("promise 4 is resolved");
//  resolve({userName:"Chiaur",userAge:24});
// }).then(function(user){     
//     console.log(user.userName);
//     return user;
// }).catch(function(){
//     console.log("Promise is rejected");
// });


//promise with reject
// const promiseFive = new Promise (function(resolve,reject){
//   setTimeout(function() {
//     error=true;
//     if(!error){
//       resolve({username:"Rinju", password:"1234"});
//     } else {
//       reject('Something went wrong');
//     }
    
//   }, 1000)
// });
// promiseFive.then(function(user){
//   console.log(user);
//   return user.username})
//   .then(function(username){
//     console.log(username);
//   })
//   .catch(function(error){
//     console.log(error);
//   });


  //with async and await
// async function consumePromiseFive(){
//   try {
//     const response =await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive(); 

async function getalluser(){
  try {
    const response =await fetch('https://api.github.com/users/Rinju-Pokhrel1')
  const data =await response.json();
  console.log(data);
  } catch (error) {
    console.log("Error found:", error);
  }
  
}

getalluser();

//using then catch
fetch('https://api.github.com/users/Rinju-Pokhrel1')
.then(function(response){
  return response.json();}
).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("Error found:", error);
});
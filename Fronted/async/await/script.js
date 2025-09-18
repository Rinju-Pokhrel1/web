// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Rinju");
//         }, 1000);
//     });
// }
// // }async function main(){
// // console.log("Loading modules")
// // console.log("Do smtg else")
// // let data = await getData();
// // console.log(data);
// // // data.then((res) => {
    
// //     console.log(res);
// //     console.log("Loading modules  ")
// //     console.log("process data")

// // }main()
// // //   console.log("Loading modules  ")  
// // // console.log("process data")

// async function main() {
//   console.log("Loading modules");
//   console.log("Do something else");

//   let data = await getData(); // wait for the promise to resolve
//   console.log(data);

//   console.log("Loading modules again");
//   console.log("Process data");
// }

// main();

// FETCH API 

// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json(); // parse JSON directly
//   console.log("Fetched Data:", data);
//   return data;
// }

// async function main() {
//   console.log("Loading modules");
//   console.log("Do something else");
//   console.log("Load data...");

//   const data = await getData(); // wait for API call to complete
//   console.log("Data received in main:", data);

//   console.log("Process data");
//   console.log("Task 2");
// }

// main();

//post
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json(); // Parse JSON response
    console.log("Response:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createPost();

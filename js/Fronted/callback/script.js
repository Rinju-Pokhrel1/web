console.log("Rinju is a hacker");
console.log("Rinju is a good hacker");
setTimeout(() => {
    console.log("i am inside settimeout")
}, 2000);
console.log("End of the script");

// Call back function
const callback = (arg) => {
    console.log(arg);
}
const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback('Rinju');
    document.head.append(script);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", (msg) => {
    console.log(msg + " Script loaded successfully using callback!");
});
// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Rinju");
    }, 1000);
});
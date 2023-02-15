// Promise defination
// promise is a object which represent the eventual completion of an asynchronous operation
let promise = new Promise((resolve, reject) => {
    console.log("Hello Promise")
    resolve(50)
})

console.log("Hello")
setTimeout(() => {
    console.log("Hello in 2 second")
}, 2000);
console.log("My name is" + "Jonny")
console.log(promise)

// Promise is use for the parllel execution
// Fetch google.com homepage ==> console.log("google.com homepage Done")
// Fetch data from the data api
// Fetch picture from the server
// Print downloding
// Rest of the script
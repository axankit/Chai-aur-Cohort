

// Situation 1 

// const fs= require("fs")


// setTimeout(()=>console.log("setTimeout"), 0)
// setImmediate(()=>console.log("setImmediate"), 0)

// console.log("Hello")


// Output
// Hello
// setTimeout
// setImmediate



//  Situation 2

const fs= require("fs")


setTimeout(()=>console.log("setTimeout"), 0)
setImmediate(()=>console.log("setImmediate"))

console.log("Hello")



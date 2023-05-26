// const amount = 12 

// if(amount < 10) {
//     console.log("Small number")
// } else {
//     console.log("Large number")
// }

// console.log(`Hello, this is my code!`)  

// setInterval(() => {
//     console.log('Hello world')
// }, 1000)

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// const names = require("./4-names")
// const sayHi = require("./5-utils")
// const data = require("./6-alternative-flavor")

// console.log(data)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


const path = require('path') 
console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'teste.txt')
console.log(absolute)
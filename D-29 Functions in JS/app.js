// // Defining a function
// function funcName() {
//     do something
// }
// function repeat(str,numTimes) {
//     let result = ''
//     for (let i=0;i<numTimes;i++)
//         result+=str
//     console.log(result)
// }

// function add(num1,num2) {
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//         return false
//     }
//     return num1 + num2
// }

// // Functions as Arguments

// function callTwice(func) {
//     func()
//     func()
// }
// function rollDie() {
//     const value = Math.floor(Math.random() * 6 + 1)
//     console.log(value)
// }
// callTwice(rollDie)

// // Returning Functions
// function makeBetweenFunc(min,max) {
//     return function(num) {
//         return num >= min && num<= max
//     }
// }
// const isChild = makeBetweenFunc(0,18)
// const isAdult = makeBetweenFunc(19,50)
// const isSenior = makeBetweenFunc(51,100)

// // METHODS

// const myMath = {
//     area: function(x,y) {
//         return x * y ;
//     },
//     perimeter: function(x,y) {
//         return 2*x + 2*y ;
//     }
// }

// // SHORTHAND

// const myMaths = {
//     area(x,y) {
//         return x*y ;
//     },
//     perimeter(x,y) {
//         return 2*x + 2*y ;
//     }
// }

// // 'this' Keyword in Methods

// const person = {
//     first: "Ayush",
//     last: "Dubey",
//     fullName() {
//         return `${this.first} ${this.last}`
//     }
// }
// console.log(person.fullName()) ;     //"Ayush Dubey"
// console.log(person.last = "Dwivedi") ;
// console.log(person.fullName()) ;     //"Ayush Dwivedi"

// // Try/Catch in JS (Handle Errors)

// try {
//     hello.toUpperCase()
// } catch {
//     console.log("ERROR!!!")
// }
// console.log("Conditional Statements")
// let random = Math.random()
// if (random < 0.5) {
//     console.log("Your Number Is Less than 0.5")
//     console.log(random)
// }
// else if (random >= 0.5) {
//     console.log("Your Number Is Greater than 0.5")
//     console.log(random)
// }
// let password = prompt("Enter Password")
let password = "cat dog"
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Password Cannot Contain Spaces!!!")
    }
    else {
        console.log("Valid Password")
    }
}
else {
    console.log("Invalid Password")
}


let userInput = prompt("Enter Something or Nothing")
if (56) {
    console.log("TRUTHY")
}
else { console.log("FALSY")
    }

if (null) {
    console.log("TRUTHY")
}
else { console.log("FALSY")
    }

if (NaN) {
    console.log("TRUTHY")
}
else { console.log("FALSY")
    }

if (undefined) {
    console.log("TRUTHY")
}
else { console.log("FALSY")
    }
let maximum = parsInt(prompt("Enter the maximum number!"))
while (!maximum) {
    maximum = parseInt(prompt("Enter a maximum number!"))
}
const targetNum = parsInt(Math.floor(Math.random() * maximum + 1));
let attempts = 1;
let guess = prompt(`Enter your first guess! (Type 'q' to quit! )`) ;
while (guess !== targetNum) {
    if (guess === 'q') break ;
    guess = parsInt(guess) ;
    if (guess > targetNum) {
        guess = prompt("Too High!, Enter a new guess:")
        attempts ++ ;
    }
    else if (guess < targetNum) {
        guess = prompt("Too Low!, Enter a new guess:")
        attempts ++ ;
    }
    else {
        guess = prompt("Please enter a valid number or Press 'q' to quit")
    }
}
if (guess == 'q') {
    console.log("OK, YOU QUIT")
} else {
    console.log(targetNum)
    console.log(`YOU GOT IT!! It took you ${attempts} guesses`)
}
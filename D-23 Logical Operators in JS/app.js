let age = prompt("Enter your Age") ;
if (!age) {
   age = console.log("PLease try again") ;
}
else if (age<=10 || age>=65) {
    console.log("It's FREE!!")
}
else if (age>10 && age<65) {
    console.log("It's $10 for you.") ;
}


const day = 5
switch(day) {
    case 1 :
        console.log("Monday")
        break
    case 2 :
        console.log("Tuesday")
        break
    case 3 :
        console.log("Wednesday")
        break
    case 4 :
        console.log("Thursday")
        break
    case 5 :
        console.log("Friday")
        break
    case 6 :
        console.log("Saturday")
        break
    case 7 :
        console.log("Sunday")
        break
    default:
        console.log("Invalid number")
}
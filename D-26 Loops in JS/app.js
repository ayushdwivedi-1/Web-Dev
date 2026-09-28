// for LOOP

// for (let i = 1; i<=10; i++) {
//     console.log(i)
// }

// for (let j = 0; j<6; j++){
//     console.log("Hello")
// }

// //Print Even numbers from 0 to 20

// for (let even = 0;even<=20; even += 2) {
//     console.log(even)
// }

// // Looping over arrays

// const animals = ['Lions','Tigers','Bears']
// for (let i = 0;i<animals.length; i++) {
//     console.log(i, animals[i])
// }

// Nested Loops

let str = "Lol"
for (let i=0; i<=4; i++) {
    console.log("Outer:", i) ;
    for (let j=0; j < str.length; j++) {
        console.log('   Inner:',str[j]);
    }
}

// while LOOP

let num = 0
while (num < 10) {
    console.log(num);
    num++;
}
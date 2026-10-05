// // Default Params

// function rollDie(numsides=6) {
//     return Math.floor(Math.random() * numsides) + 1
// }

// // Spread for Function Calls

// const nums = [9,3,2,8]
// Math.max(nums)  //NaN
// Math.max(...nums)   //Using Spread
// // Same as Calling Math.max(9,3,2,8)

// // Spread with Array Literals

// const cats = ['Blue','Scout','Rocket']
// const dogs = ['Rusty','Luna']
// const allPets = [...cats,...dogs]   // Makes a new array
// console.log(allPets)

// // Spread in Object Literals

// const feline = {legs:4,family:'felidae'}
// const canine = {family:'Caninae',furry:true}
// const dog = {...canine,isPet:true}
// //{family: 'Caninae', furry: true, isPet: true}
// const lion = {...feline,genus:'Panthera'}
// //{legs: 4, family: 'felidae', genus: 'Panthera'}
// const catdog = {...feline,...canine}
// //{legs: 4, family: 'Caninae', furry: true}

// //Rest Params

// function sumAll(...nums) {
//     let total = 0;
//     for (let n of nums) total += n
//     return total
// }

// // Destructuring Arrays

// const scores = [95,89,86,78,69]
// const [gold, silver, bronze] = scores;

// // Destructuring Objects

// const user = {
//     email: 'ayush@gmail.com',
//     password: '12345678',
//     firstName: 'Ayush',
//     lastname: 'Dwivedi',
//     born: 2008,
//     bio: 'Student of Btech CSE at LPU',
//     city: 'Kanpur',
//     state: 'UP'
// }
// const {email,firstName,city,bio} = user;
// const {born: birthYear} = user;

// // Param Destructuring
// const fullName = ({first,last})=>{
//     return `${first} ${last}`
// }
// const runner = {
//     first: "Eluid",
//     last: "Kipchoge",
//     country: "Kenya"
// }
// fullName(runner); // "Eluid Kipchoge"
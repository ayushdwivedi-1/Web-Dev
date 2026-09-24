let planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift() ;
planets.push("Saturn")
planets.push("Neptune")
planets.push("Uranus")
planets.unshift("Mercury")
console.log(planets)

const array1=['a','b','c']
const array2=['d','e','f']
const array3=array1.concat(array2)
console.log(array3)
console.log(array3.indexOf('e')) //4
console.log(array3.includes('c')) //true
// console.log(array3.reverse())
// Reverses the order of array
console.log(array3.slice(2)) //Prints from index 4 to end
console.log(array3.slice(2,5)) //Prints from index 2 to 4 because 5 is exclusive
console.log(array3.slice(-3)) //Gives last 3 elements
console.log(array3.splice(4,1)) //Deletes 1 element at index 4
console.log(array3)
console.log(array3.splice(2,0,"Hello")) // Inserts 'Hello' at index 2 without replacing any element
console.log(array3)
console.log(array3.splice(2,2,"Replaced")) // Replaces 2 elements from 2nd index to 'Replaced'
console.log(array3)

// Nested arrays
let colors = [['red','crimson'],['orange','dark orange'],['yellow','gold']['green','olive'],['blue','royal blue'],['purple','orchid']]
console.log(colors[2][1]) //Prints Gold 2 is the index of colors array and 1 is the index of array inside colors
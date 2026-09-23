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
console.log(array3.reverse())
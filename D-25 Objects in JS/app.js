const fitBitData = {
    totalSteps: 308727,
    totalKiloMetres: 340,
    avgCalorieBurn: 5755,
    workOutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

// Accesing info from objects
// Method-1 
console.log(fitBitData["avgCalorieBurn"])

// Method-2
console.log(fitBitData.avgCalorieBurn)

// Access fullAddress below

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
};
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress)

// MOdifying objects

const midTerms= {
    Ayush: 96,
    Atul: 90,
};
console.log(midTerms)
midTerms.Atul=95
console.log(midTerms)
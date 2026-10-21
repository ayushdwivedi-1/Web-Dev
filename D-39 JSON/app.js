const data = `{"ticket":{"base":"BTC","target":"USD","price":"82598.76","volume":"91769.798653","change":"-46.294657"},"timestamp":"1596510482","success":"true","error":""}`
 
// For Strings to JSON use JSON.parse()

const parseData = JSON.parse(data)
console.log(parseData.ticket.price)
console.log(parseData.ticket)
console.log(parseData.timestamp)
// For JSON to Strings use JSON.stringify()

const parseStr = JSON.stringify(data)
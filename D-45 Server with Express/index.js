const express = require("express");
const app = express()
// app.use((req,res) => {
    // console.log("We Got a New Request!!!")
    // res.send("HELLO WE GOT YOUR REQUEST, THIS IS A RESPONSE!")
    // res.send({color:"red"})
    // res.send('<h1>This is my Webpage!</h1>')
// })

app.get('/', (req,res) => {
    res.send("Welcome to Homepage!!!")
})
app.get('/cats',(req,res) => {
    res.send("Meow!")
})
app.post('/cats',(req,res) => {
    res.send("This is a post request")
})
app.get('/dogs',(req,res) => {
    res.send("WOOF!")
})
app.get('/cats/:something', (req,res) => {
    const { something } = req.params;
    res.send(`Browsing ${something}`)
})
app.get('/cats/:something/:postID', (req,res) => {
    const { something,postID } = req.params;
    res.send(`Browsing ${something} on ${postID}`)
})
app.get('/search', (req,res) => {
    const {q} = req.query;
    if(!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!")
    }
    res.send(`<h1> Search Results for: ${q} </h1>`)
})
app.get('/{*path}', (req, res, next) => {
    res.send("Path Not Found!!!")
})
app.listen(3000, () => {
    console.log("Listening on port 3000")
})

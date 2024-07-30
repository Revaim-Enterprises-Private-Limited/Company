const express = require('express')
const path = require('path')
const App = express()
var port = 3000 
App.use(express.static(path.join(__dirname, "css")))
App.use(express.static(path.join(__dirname, "javascript")))
App.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, "html", "index.html"))
})
App.get(`/Home`, (req, res) => {
    res.sendFile(path.join(__dirname, "html", "Home.html"))
})
App.get(`/Services`, (req, res) => {
    res.sendFile(path.join(__dirname, "html", "Services.html"))
})
App.get(`/About`, (req, res) => {
    res.sendFile(path.join(__dirname, "html", "About.html"))
})
App.get(`/Contact`, (req, res) => {
    res.sendFile(path.join(__dirname, "html", "Contact.html"))
})
App.listen(port, () => {
    console.log(`listening on ${port}`)
})
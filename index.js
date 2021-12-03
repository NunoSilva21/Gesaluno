const express = require('express')
const path = require ('path')
const app = express()
const connection = require ('./dbconnection')
app.use(express.static('./public'))
 
app.get('/navbar', function (req, res) {
  res.sendFile(path.join(__dirname, './public/navbar.html'))

}) 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))

}) 

const port = 4000;

app.listen(port, function (){
  console.log("Listenning on port:" + port)
})
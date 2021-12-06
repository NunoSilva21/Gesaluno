const express = require('express')
const formdataRoute = express.Router()
const connection = require('../dbconnection')

formdataRoute.get('/',(req,res) => {
//pedido em http://localhost:4000/city
    connection.query('SELECT * FROM tipos', function(erro,result){
      if(erro){
        console.log('Erro na base de dados...')
      }
      else { 
        res.json(result)
      }
    })
})

module.exports = formdataRoute
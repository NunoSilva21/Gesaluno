const express = require('express')
const inserirutilizadorRoute = express.Router()
const connection = require('../dbconnection')

inserirutilizadorRoute.post('/',(req,res) => {
//pedido em http://localhost:4000/city
    /*connection.query('SELECT * FROM tipos', function(erro,result){
      if(erro){
        console.log('Erro na base de dados...')
      }
      else { 
        res.json(result)
      }
    })*/
    console.log(req.body)
    res.json ({res: 'chegou tudo inteiro!'})

})

module.exports = inserirutilizadorRoute
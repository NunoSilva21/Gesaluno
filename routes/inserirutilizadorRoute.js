const express = require('express')
const multer = require('multer')
const inserirutilizadorRoute = express.Router()
const connection = require('../dbconnection')

inserirutilizadorRoute.post('/', (req,res) => {
    const storage = multer.diskStorage({
        destination: (req,file,callback) => {
            callback(null, './public/fotos')
        },
        filename: (req,file,callback) => {
            callback(null, file.originalname)
        }
    })
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 100000} 
})

upload(req, res, (err) => {
    console.log(req.files)
})


/*inserirutilizadorRoute.post('/', (req,res) => {
    connection.query('INSERT INTO utilizadores (nomeutilizador,moradaRua,moradanumero,datanascimento,telemovel,email,idtipo) VALUE(?,?,?,?,?,?,?)' [req.body.nomeutilizador,req.body.moradaRua,req.body.moradanumero,req.body.datanascimento,req.body.telemovel,req.body.email,req.body.idtipo] ,

     (err,result) => {
        if(err){
            console.log('Erro na base de dados...')
        }
        else {
            console.log(result)
            res.json({text : 'Utilizador adicionado com sucesso!'})
        }
    }) 
})*/

module.exports = inserirutilizadorRoute

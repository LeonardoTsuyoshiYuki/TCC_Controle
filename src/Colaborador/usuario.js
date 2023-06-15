const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')


app.use(bodyParse.urlencoded({extendes: true}))

app.get('/usuarios', (req, res, next) =>{
    res.send(bancoDeDados.getUsuario())
})

//Mostrar o Usuario
app.get('/usuarios/:id',(req, res, nesxt) => {
    res.send(bancoDeDados.getUsuario(req.params.id))
})
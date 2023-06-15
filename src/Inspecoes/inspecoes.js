const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/inspecoes', (req, res, next) =>{
    res.send(bancoDeDados.getInspecoes())
})

//Mostrar o inspecao
app.get('/inspecoes/:id',(req, res, nesxt) => {
    res.send(bancoDeDados.getInspecoes(req.params.id))
})



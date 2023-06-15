const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

//Mostrar o produto
app.get('/produtos/:id',(req, res, nesxt) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})



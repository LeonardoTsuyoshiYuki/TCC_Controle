const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

//Cria o produto
app.post ('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        CA:req.body.CA,
        validadeCA:req.body.validadeCA,
        fabricante:req.body.fabricante,
        quantidade:req.body.quantidade
    })
    res.send(produto)
})
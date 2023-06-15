const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

//Editando o produto
app.put ('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome:req.body.nome,
        CA:req.body.CA,
        validadeCA:req.body.validadeCA,
        fabricante:req.body.fabricante,
        quantidade:req.body.quantidade
    })
    res.send(produto)
})

//Excluir Produto
app.delete ('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(
        req.params.id
        )
    res.send(produto)
})

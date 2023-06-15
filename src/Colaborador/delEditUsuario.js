const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')


app.use(bodyParse.urlencoded({extendes: true}))

app.get('/usuarios', (req, res, next) =>{
    res.send(bancoDeDados.getUsuario())
})

//Editando o Usuario
app.put ('/usuarios/:id', (req, res, next) => {
    const usuario = bancoDeDados.salvarUsuario({
        id:req.params.id,
        nome:req.body.nome,
        CA:req.body.CA,
        validadeCA:req.body.validadeCA,
        fabricante:req.body.fabricante,
        quantidade:req.body.quantidade
    })
    res.send(usuario)
})

//Excluir Usuario
app.delete ('/usuarios/:id', (req, res, next) => {
    const usuario = bancoDeDados.excluirUsuario(
        req.params.id
        )
    res.send(usuario)
})
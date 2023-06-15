const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/usuarios', (req, res, next) =>{
    res.send(bancoDeDados.getUsuario())
})

//Cria o Usuario
app.post ('/usuarios', (req, res, next) => {
    const usuario = bancoDeDados.salvarUsuario({
        nome:req.body.nome,
        CA:req.body.CA,
        validadeCA:req.body.validadeCA,
        fabricante:req.body.fabricante,
        quantidade:req.body.quantidade
    })
    res.send(usuario)
})
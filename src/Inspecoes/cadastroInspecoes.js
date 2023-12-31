const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/inspecoes', (req, res, next) =>{
    res.send(bancoDeDados.getInspecoes())
})

//Cria o inspecao
app.post ('/inspecoes', (req, res, next) => {
    const dadosInspecao = bancoDeDados.salvarInspecoes({
        matricula:req.body.matricula,
        colaborador:req.body.colaborador,
        polo:req.body.polo,
        data:req.body.data,
    })
    
    res.send(inspecao)
})
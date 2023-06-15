const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('..BancoDados/dbPostgreSQL')

app.use(bodyParse.urlencoded({extendes: true}))

app.get('/inspecoes', (req, res, next) =>{
    res.send(bancoDeDados.getInspecoes())
})

//Editando o inspecao
app.put ('/inspecoes/:id', (req, res, next) => {
    const dadosInspecao = bancoDeDados.salvarInspecoes({
        matricula:req.body.matricula,
        colaborador:req.body.colaborador,
        polo:req.body.polo,
        data:req.body.data,
    })
    res.send(inspecao)
})

//Excluir inspecao
app.delete ('/produtos/:id', (req, res, next) => {
    const dadosInspecao = bancoDeDados.excluirInspecoes(
        req.params.id
        )
    res.send(inspecao)
})

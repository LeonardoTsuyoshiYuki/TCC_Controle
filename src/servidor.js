const porta = 3000
const express = require('express')
const app = express()

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}.`)
})
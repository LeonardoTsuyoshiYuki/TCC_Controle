const { cadastrarUsuario } = require('../Colaborador/cadastroUsuario')
const { describe, it, expect } = require('@jest/globals')


describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário', () => {
    const nome = 'John Doe'
    const matricula = '100012345'
    const funcao = 'COLABORADOR'
    const cargo = 'Leiturista I'
    const email = 'johndoe@example.com'
    const senha = '123456'

    const resultado = cadastrarUsuario(nome, matricula, funcao, cargo, email, senha)
    expect(resultado).toBeTruthy()
  })

  it('Deve falhar ao cadastrar um usuário com a matricula inválido', () => {
    const nome = 'John Doe'
    const matricula = 'matricula-invalido'
    const funcao = 'COLABORADOR'
    const cargo = 'Leiturista I'
    const email = 'email-invalido'
    const senha = '123456'

    const resultado = cadastrarUsuario(nome, matricula, funcao, cargo, email, senha)
    expect(resultado).toBeFalsy()
  })

  it('Deve falhar ao cadastrar um usuário com email inválido', () => {
    const nome = 'John Doe'
    const matricula = '100012345'
    const funcao = 'COLABORADOR'
    const cargo = 'Leiturista I'
    const email = 'email-invalido'
    const senha = '123456'

    const resultado = cadastrarUsuario(nome, matricula, funcao, cargo, email, senha)
    expect(resultado).toBeFalsy()
  })

  it('Deve falhar ao cadastrar um usuário com senha fraca', () => {
    const nome = 'John Doe'
    const matricula = '100012345'
    const funcao = 'COLABORADOR'
    const cargo = 'Leiturista I'
    const email = 'johndoe@example.com'
    const senha = '123'

    const resultado = cadastrarUsuario(nome, matricula, funcao, cargo, email, senha)
    expect(resultado).toBeFalsy()
  })
})

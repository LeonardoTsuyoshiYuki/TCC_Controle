
const { cadastrarInspecao } = require('../Inpecoes/cadastroInspecoes')
const { describe, it, expect } = require('@jest/globals')

describe('Cadastro de Inspeção', () => {
  it('Deve cadastrar uma nova inspeção', () => {
    const dadosInspecao = {
        matricula:'100012345',
        colaborador:'Leiturista I',
        polo: '10',
        data: '2023-06-13',
    }

    const resultado = cadastrarInspecao(dadosInspecao)
    expect(resultado).toBeTruthy();
  })


  it('Deve falhar ao cadastrar uma inspeção com dados inválidos', () => {
    const dadosInspecao = {
        matricula:'100012345',
        colaborador:'Leiturista I',
        polo: '10'
    }

    const resultado = cadastrarInspecao(dadosInspecao);
    expect(resultado).toBeFalsy();
  })

  it('Deve falhar ao cadastrar uma inspeção com dados inválidos', () => {
    const dadosInspecao = {
        matricula:'matricula-invalido',
        colaborador:'Leiturista I',
        polo: '10',
        data: '2023-06-13'
    }

    const resultado = cadastrarInspecao(dadosInspecao);
    expect(resultado).toBeFalsy();
  })

  it('Deve falhar ao cadastrar uma inspeção com dados inválidos', () => {
    const dadosInspecao = {
        matricula:'100012345',
        colaborador:'Leiturista I',
        polo: 'Codigo-Polo-Invalido',
        data: '2023-06-13'
    }

    const resultado = cadastrarInspecao(dadosInspecao);
    expect(resultado).toBeFalsy();
  })
})

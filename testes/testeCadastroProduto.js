
const { cadastrarProduto } = require('..src/Produtos/cadastroProduto');
const { describe, it, expect } = require('@jest/globals');


describe('Cadastro de Produto', () => {
  it('Deve cadastrar um novo produto', () => {
    const produto = {
      nome: 'Produto A',
      CA: '12345',
      validadeCA: '2023-06-30',
      fabricante: 'Fabricante A',
      quantidade: 10,
    };

    const resultado = cadastrarProduto(produto);
    expect(resultado).toBeTruthy();
  });

  it('Deve falhar ao cadastrar um produto com dados inválidos', () => {
    const produto = {
      CA: '12345',
      validadeCA: '2023-06-30',
      fabricante: 'Fabricante A',
      quantidade: 10,
    };

    const resultado = cadastrarProduto(produto);
    expect(resultado).toBeFalsy();
  });
});

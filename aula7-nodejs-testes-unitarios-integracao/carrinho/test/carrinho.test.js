import Carrinho from '../carrinho.js';
import Item from '../item.js'

describe('Teste do carrinho', () => {
  it('Deve inicializar com carrinho vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBe(null);
  })

  it('Deve guargar os itens', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maçã', 0.5, 2);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  })
});

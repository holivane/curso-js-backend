const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@email.com",
  telefone: ["11955553344", "11955553334"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log(`Compra no valor de R$${valor}. Saldo insuficiente!!!`);
    } else {
      this.saldo -= valor;
      console.log('Pagamento realizado com sucesso');
      console.log(`Novo Saldo: R$${this.saldo}`);
    }
  }
};


cliente.efetuaPagamento(250);
cliente.efetuaPagamento(25);
cliente.efetuaPagamento(78);
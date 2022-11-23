const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@email.com",
  telefone: ["11955553344", "11955553334"],
};

cliente.endereco = [
  {
    rua: "Rua 10",
    numero: 234,
    apartamento: true,
    complemento: "apto 934",
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];

  if (tipo !== 'object') {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  }
}
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

cliente.endereco.push({
  rua: "Antonio Moreira",
  numero: 449,
  apartamento: false,
})

cliente.endereco.push({
  rua: "Antonio Moreira",
  numero: 224,
  apartamento: false,
})

console.log(cliente);

const listaCasas = cliente.endereco.filter(
  (endereco) => endereco.apartamento === false
)

console.log('A lista de casas é: ',listaCasas);
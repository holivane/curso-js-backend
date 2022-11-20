const cliente = {
  nome: "André",
  idade: 32,
  cpf: "27099491059",
  email: "andre@email.com",
};

console.log(cliente);
console.log(
  `O nome do cliente é ${cliente.nome}, este cliente tem ${cliente.idade} anos`
);
console.log('----------------------------------------------------');

console.log(`O email do cliente é ${cliente['email']}`)

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
console.log('----------------------------------------------------');

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach(chave => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
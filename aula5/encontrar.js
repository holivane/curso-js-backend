const clientes = require('./clientes.json');

function encontrar(lista, chave, valor){
  return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, 'nome', 'Juliet');
const encontrado2 = encontrar(clientes, 'telefone', '2047970414')

console.log(encontrado);
console.log(encontrado2);

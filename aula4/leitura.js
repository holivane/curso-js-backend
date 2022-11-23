const dados = require('./cliente.json');

console.log(dados);

console.log('Tipo: ',typeof(dados), '\n');

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

console.log('Tipo: ' , typeof(clienteEmString));
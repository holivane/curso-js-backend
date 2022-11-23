const clientes = require("./clientes.json");

function filtraAptoSemComplemento(lista) {
  return lista.filter(
    cliente => cliente.endereco.apartamento && !cliente.endereco.complemento
  );
}

console.log(filtraAptoSemComplemento(clientes));

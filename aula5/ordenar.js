const clientes = require("./clientes.json");

function ordena(lista, paramentro) {
  const resultado = lista.sort((a, b) => a[paramentro] < b[paramentro] ? -1 : 1);
  return resultado
}

// function ordena(lista, paramentro) {
//   const resultado = lista.sort((a, b) => {
//     if (a[paramentro] < b[paramentro])
//       return -1;
//     if (a[paramentro] > b[paramentro])
//       return 1;
//     return 0;
//   });
//   return resultado
// }

console.log(ordena(clientes, 'nome'));

// import assert from 'node:assert/strict';

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculaDescontos,
};

// const verificaSe = (valor) => {
//   const assercoes = {
//     ehExatemanteIgualA(esperado) {
//       assert.strictEqual(valor, esperado, 'O valor retornado não é o esperado');
//     },
//   };
//   return assercoes;
// };

// const teste = (titulo, funcaoDeTeste) => {
//   try {
//     funcaoDeTeste();
//     console.log(`${titulo} passou`);
//   } catch (error) {
//     console.log(`${titulo} não passou`, error);
//   }
// };

// teste('somaHorasExtras', () => {
//   const esperado = 2500;
//   const retornado = somaHorasExtras(2000, 500);

//   verificaSe(retornado).ehExatemanteIgualA(esperado);
// });

// teste('calculaDesconto', () => {
//   const esperado = 2300;
//   const retornado = calculaDescontos(2500, 200);

//   verificaSe(retornado).ehExatemanteIgualA(esperado);
// });

const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0],
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9],
  },
  {
    nome: 'Zeraldo',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9, 35.5],
  },
];

function calculaSaldo(receitas, despesas) {
  let rec = somaNumeros(receitas);
  let des = somaNumeros(despesas);
  return rec - des;
}

function somaNumeros(numeros) {
  let number = 0;
  for (num of numeros) {
    number += num;
  }
  return number;
}

for (let usuario of usuarios) {
  let resultado = calculaSaldo(usuario.receitas, usuario.despesas);
  if (resultado > 0) {
    console.log(
      `${usuario.nome} possui saldo POSITIVO de ${resultado.toFixed(2)}`
    );
  } else {
    console.log(
      `${usuario.nome} possui saldo NEGATIVO de ${resultado.toFixed(2)}`
    );
  }
}

// utilizando for padrão
// for (let i = 0; i < usuarios.length; i++) {
//   let resultado = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
//   if (resultado > 0) {
//     console.log(
//       `${usuarios[i].nome} possui saldo POSITIVO de ${resultado.toFixed(2)}`
//     );
//   } else {
//     console.log(
//       `${usuarios[i].nome} possui saldo NEGATIVO de ${resultado.toFixed(2)}`
//     );
//   }
// }

// function somaNumeros(numeros) {
//   let number = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     number += numeros[i];
//   }
//   return number;
// }

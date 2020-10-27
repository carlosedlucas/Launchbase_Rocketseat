const usuario = [
  {
    nome: 'Rocketseat',
    foco: 'Programação',
    endereco: {
      rua: 'Rua Guilherme Gembala',
      numero: 260,
    },
  },
];

for (let usu of usuario)
  console.log(
    `A empresa ${usu.nome} está localizada em ${usu.endereco.rua}, ${usu.endereco.numero}`
  );

// laço de repetição for padrão
// for (let i = 0; i < usuario.length; i++) {
//   console.log(
//     `A empresa ${usuario[i].nome} está localizada em ${usuario[i].endereco.rua}, ${usuario[i].endereco.numero}`
//   );
// }

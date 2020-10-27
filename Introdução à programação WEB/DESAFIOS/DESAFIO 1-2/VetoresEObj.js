const programador = [
  {
    nome: 'Carlos',
    idade: 29,
    propriedade: [
      { nome: 'C++', especialidade: 'Desktop' },
      { nome: 'Python', especialidade: 'Data Science' },
      { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    ],
  },
];

for (let descricao of programador) {
  console.log(
    `O usuário ${descricao.nome} tem ${descricao.idade} anos e usa a tecnologia ${descricao.propriedade[0].nome} com especialidade em ${descricao.propriedade[0].especialidade}`
  );
}

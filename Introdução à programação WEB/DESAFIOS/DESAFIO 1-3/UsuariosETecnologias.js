const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] },
];

for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
}

// utilizando o for padrão
// for (let i = 0; i < usuarios.length; i++) {
//   console.log(
//     `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`
//   );
// }

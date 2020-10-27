const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] },
];

function checaSeUsuarioUsaCSS(usuario) {
  for (tecnologia of usuario.tecnologias) {
    if (tecnologia == 'CSS') {
      return tecnologia;
    }
  }
}

for (let usuario of usuarios) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);
  if (usuarioTrabalhaComCSS) {
    console.log(`${usuario.nome} trabalha com CSS`);
  }
}

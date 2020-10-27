const infoUsuario = [
  { nome: 'Joan Jett', sexo: 'F', idade: 62, contribuicao: 53 },
  { nome: 'Jimmy Hendrix', sexo: 'M', idade: 27, contribuicao: 263 },
  { nome: 'Kurt Kobain', sexo: 'A', idade: 27, contribuicao: 23 },
];

function regraAposentadoria(idade, contribuicao) {
  let soma = idade + contribuicao;
  return soma;
}

for (let usuario of infoUsuario) {
  let resultado = regraAposentadoria(usuario.idade, usuario.contribuicao);
  let mulher = usuario.sexo == 'F' && resultado >= 85;
  let homem = usuario.sexo == 'M' && resultado >= 95;
  let dadoCorreto = usuario.sexo == 'F' || usuario.sexo == 'M';
  if (mulher) {
    console.log(`${usuario.nome} você pode se aposentar!`);
  } else if (homem) {
    console.log(`${usuario.nome} você pode se aposentar!`);
  } else if (!dadoCorreto) {
    console.log(`Dados incongruentes!`);
  } else {
    console.log(`${usuario.nome} você não pode se aposentar!`);
  }
}

// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];
  
  function imprimeMensagem (usuario){
          for (i = 0; i < usuario.length; i++ ){
              mensagem = (`${usuario[i].nome} trabalha com ${usuario[i].tecnologias.join(", ")}`);
              console.log(mensagem);
          }
  // Esse return com string vazia foi colocado na função para ela não retornar undefined
          return "";
      }
  
  
  console.log (imprimeMensagem(usuarios));
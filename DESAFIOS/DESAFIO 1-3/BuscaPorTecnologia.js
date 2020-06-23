const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];
  
  
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false. 
function checaSeUsuarioUsaCSS(usuario){
      for (let tecnologia of usuario.tecnologias){
      const encontreiTecnologiaCSS = tecnologia === "CSS";
      if(encontreiTecnologiaCSS)
      return true
      } 
      return false
    }

for (let usuario of usuarios) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);
  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario.nome} trabalha com CSS`);
  } 
}


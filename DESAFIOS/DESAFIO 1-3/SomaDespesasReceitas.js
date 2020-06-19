const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: 'Zeraldo',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9,35.5]
  }
]

// Calcular soma de receitas e despesas de usuários e no fim retorna o saldo (receitas menos despesas)
// Percorra o array de usuários 




// função que recebe receitas e despesas do usuário
function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)
  return saldo = somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
  let soma = 0
  for (let numero of numeros) {
      soma = soma + numero
  }
  return soma
}


// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
for (usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas);
    const saldoPositivo = saldo > 0;
    let positivoOuNegativo = "";
        
    if (saldoPositivo > 0){
        positivoOuNegativo = "POSITIVO"
      } else if (saldoPositivo < 0) {
        positivoOuNegativo = "NEGATIVO"
      } else {
        positivoOuNegativo = "de zero reais"
      }
    
    
    
    if (saldoPositivo > 0 ){
        console.log (`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
        } else if (saldoPositivo < 0){
        console.log (`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
        } else {
        console.log (`${usuario.nome} possui saldo ${positivoOuNegativo}`)
        }
}


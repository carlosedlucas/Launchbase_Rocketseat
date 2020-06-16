// Programa para cáulo de aposentadoria  e níve de obesidade de uma pessoa

const pessoa = [
    {nome: "Robert Plant",
    sexo: "M",
    idade: 71,
    contribuicao: 35
}
]

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

let tempoContribuicao = pessoa[0].contribuicao;
let sexo = pessoa[0].sexo;
let idade = pessoa[0].idade;
let regraSoma = (tempoContribuicao + idade);

// Tem que satisfazer as três condições para a mensagem de aposentadoria ser afirmativa: 

if (sexo === "F" && tempoContribuicao >= 30 && regraSoma >= 85){
    mensagem = (`${pessoa[0].nome}, você pode se aposentar!`)       		
} else if (sexo === "M" && tempoContribuicao >= 35 && regraSoma >= 95) {
    mensagem = (`${pessoa[0].nome}, você pode se aposentar!`)
} else {
    mensagem = (`${pessoa[0].nome}, você ainda não pode se aposentar!`)
}

console.log (mensagem);




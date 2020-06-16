// Programa para cáulo de IMC e níve de obesidade de uma pessoa

const pessoa = [
    {nome: "Carlos Eduardo",
    peso: 90,
    altura: 1.82
    }
]

const imc = pessoa[0].peso / (pessoa[0].altura*pessoa[0].altura);

let mensagem = "";

if (imc >= 30){
    mensagem = (`${pessoa[0].nome}, você está acima do peso`);
} else {
    mensagem = (`${pessoa[0].nome}, você não está acima do peso`);
}

console.log(mensagem);
// Criar um programa que calcula a média das notas dos alunos e envia mensagem do cálculo da média.


// Objetos

const alunos = [
    {
    nome: "José",
    nota: 9.8
    },
    {
        nome: "Lito",
        nota: 10
    },
    {
        nome: "Hermes",
        nota: 2
    }
]

// Cálculo média
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 

// Se a média for maior que 5, parabenizar a turma
if (media > 5){
    console.log (`Parabéns pela nota ${media}, vocês brilharam!`);
} else {
            console.log (`Infelizmente a nota ${media}, não foi suficiente turma.`)
    }



// Criar um programa que calcula a média das turmas de alunos e envia mensagens do cálculo da média

const alunosDaTurmaA = [
    {
    nome: "Jimmy",
    nota: 1.8
    },
    {
        nome: "Page",
        nota: 10
    },
    {
        nome: "Robert",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
    nome: "Plant",
    nota: 10
    },
    {
        nome: "Bonzo",
        nota: 10
    },
    {
        nome: "PaulJones",
        nota: 0
    },
    {
        nome:"John",
        nota: 10
    }
]


function calculaMedia (alunos){
    // Cálculo média
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);


function enviaMensagem (media, turma){
// Se a média for maior que 5, parabenizar a turma
    if (media > 5){
        console.log (`Parabéns pela nota ${media}, ${turma} vocês brilharam!`);
    } else {
                console.log (`Infelizmente a nota da ${turma} foi ${media}.`)
        }
}

enviaMensagem (media1, 'turma A');
enviaMensagem (media2, 'turma B');


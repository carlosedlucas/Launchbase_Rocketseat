const pessoa = [{ nome: 'Carlos Eduardo', peso: 95, altura: 1.82 }];

function calcImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

for (let medidas of pessoa) {
  let resultado = calcImc(medidas.peso, medidas.altura);
  if (resultado > 30) {
    console.log(
      `${medidas.nome} você está acima do peso e seu imc é ${resultado.toFixed(
        2
      )}`
    );
  } else {
    console.log(
      `${
        medidas.nome
      } você não está acima do peso seu imc é ${resultado.toFixed(2)}`
    );
  }
}

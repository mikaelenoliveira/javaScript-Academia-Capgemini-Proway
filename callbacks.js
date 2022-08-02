function showResultado(result) {
  console.log(`O resultado é ${result}`);
}

function showDeOutraFoma(result) {
  console.log(`A outra forma de resultado é: ${result}`);
}

// ESSA É UMA DAS FORMAS DE FAZER
// function soma(n1, n2) {
//   var resultado = n1 + n2;
//   showResultado(resultado);
//   showDeOutraFoma(resultado);
// }

// ESSA É OUTRA
function soma(n1, n2, callback) {
  var resultado = n1 + n2;
  callback(resultado);
}

soma(10, 20, showResultado);
soma(10, 20, showDeOutraFoma);

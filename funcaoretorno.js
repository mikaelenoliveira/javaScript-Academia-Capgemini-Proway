function soma(n1, n2) {
  var resultado = n1 + n2;
  return resultado;
}

function subtracao(n1, n2) {
  var resultado = n1 - n2;
  return resultado;
}

console.log(retorno);

var retorno = soma(10, 20);

console.log(retorno);

subtracao(20, 10);

function valorDesconto(taxa, valor) {
  return valor * (taxa / 100);
}

var precoProduto = 100;
var desconto = valorDesconto(10, precoProduto);
var valorFinal = precoProduto - desconto;
console.log(valorFinal);

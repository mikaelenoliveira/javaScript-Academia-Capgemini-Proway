// Funcao anonima

const x = function (n1, n2) {
  var resultado = n1 + n2;
  console.log(resultado);
};
x(10, 20);

// arrow function

const y = (nome) => console.log(`Ola ${nome}`);
y("Maria");

const z = (n1, n2) => n1 + n2;
console.log(z(100, 200));

const w = (n1, n2) => {
  var resultado = n1 + n2;
  return resultado;
};
console.log(w(2, 2));

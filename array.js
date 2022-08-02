var numero = [10, 20, 45, 35, 13, 17];
// console.log(numero[2]);

numero.push(100); // insere mais uma informação no final

// for (let i = 0; i < numero.length; i++) {
//   console.log(numero[i]);
// }

console.log(numero.toString());

numero.shift(); //remove do inicio
console.log(numero.toString());

numero.unshift(350); //acrescenta no inicio
console.log(numero.toString());

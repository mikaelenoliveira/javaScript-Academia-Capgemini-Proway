// Declarando a função
function ola() {
  console.log("Hello World");
}

// // Invocando a função
// ola();
// ola();
// ola();

var numeros = [];

function display() {
  console.log("Listando dados da array");
  for (let i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i} valor ${numeros[i]}`);
  }
}

function add(item) {
  numeros.push(item);
}

display();
add(10);
add(20);
add(30);
display();

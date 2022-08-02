function conectar() {
  var x = 2;
  try {
    console.log("Inicio da conexão");

    if (x > 1) throw "Deu bo aqui";
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Fim da execução");
  }
}

conectar();

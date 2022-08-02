function consultar() {
  let url = "http://localhost:3000/produtos";
  fetch(url);
  .then(data => console.log(data))
}

consultar()
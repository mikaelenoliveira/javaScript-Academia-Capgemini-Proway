let promisseCadastro = new Promise(function (sucesso, erro) {
  let x = 1;

  if (x != 0) {
    sucesso("Cadastro realizado com sucesso");
  } else {
    erro("Ocorreu um erro ao cadastrar");
  }
});

// consumindo promisse

promisseCadastro.then(
  // FAZENDO COM FUNCÃO NORMAL
  /* function (value) {
    console.log(value);
  },
  function (erro) {
    console.log(erro);
  }*/

  //   FAZENDO COM ARROW FUNCTION
  (value) => {
    console.log(value);
  },
  (erro) => {
    console.log(erro);
  }
);

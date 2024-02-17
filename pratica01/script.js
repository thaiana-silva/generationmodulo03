var formulario = document.querySelector("form");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.getElementById("name");
  var sobrenome = document.getElementById("lname");
  var mensagem = document.querySelector("textarea");

  // validar os dados do formulário
  function validarDados() {
    if (nome.value === "" || sobrenome.value === "" || mensagem.value === "") {
      return false;
    } else {
      return true;
    }
  }

  var dadosValidos = validarDados();

  // Verificar se os dados são válidos ou não
  if (dadosValidos) {
    alert(
      "Obrigado pelo seu contato, " +
        nome.value +
        " " +
        sobrenome.value +
        ". Sua mensagem foi enviada com sucesso."
    );
  } else {
    alert("Por favor, preencha todos os campos do formulário.");
  }
});

// efeito de zoom no mapa
const mapa = document.querySelector(".mapa");
mapa.addEventListener("mouseenter", function () {
  mapa.querySelector("iframe").style.transform = "scale(1.1)";
});
mapa.addEventListener("mouseleave", function () {
  mapa.querySelector("iframe").style.transform = "scale(1)";
});

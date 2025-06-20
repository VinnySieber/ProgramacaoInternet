// Funcao chamada quando o botao e clicado
function calcularValor() {
  // Pega o peso digitado pelo cliente
  var peso = document.getElementById("peso").value;

  // Converte o valor para numero
  peso = Number(peso);

  // Define o preco do quilo
  var precoQuilo = 12.00;

  // Calcula o valor total
  var total = peso * precoQuilo;

  // Mostra o valor a pagar com duas casas decimais
  document.getElementById("resultado").innerText =
    "Valor a pagar: R$ " + total.toFixed(2);
}

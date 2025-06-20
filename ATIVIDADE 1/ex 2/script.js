// Esta função será chamada quando o botão for clicado
function calcularValor() {
  // Pegamos o valor do quilo digitado
  var preco = Number(document.getElementById("precoQuilo").value);

  // Pegamos a quantidade consumida digitada
  var quantidade = Number(document.getElementById("quantidade").value);

  // Fazemos a conta: preço x quantidade
  var total = preco * quantidade;

  // Mostramos o resultado na tela
  document.getElementById("resultado").innerText = "Total a pagar: R$ " + total.toFixed(2);
}

// Funcao chamada ao clicar no botao
function calcularReajuste() {
  // Pega o valor digitado e converte para numero
  var cotacao = Number(document.getElementById("cotacao").value);

  // Calcula os reajustes
  var mais1 = cotacao + (cotacao * 0.01);
  var mais2 = cotacao + (cotacao * 0.02);
  var mais5 = cotacao + (cotacao * 0.05);
  var mais10 = cotacao + (cotacao * 0.10);

  // Mostra os resultados na tela
  document.getElementById("resultado").innerText =
    "Cotacao com aumento de 1%: " + mais1.toFixed(2) + "\n" +
    "Cotacao com aumento de 2%: " + mais2.toFixed(2) + "\n" +
    "Cotacao com aumento de 5%: " + mais5.toFixed(2) + "\n" +
    "Cotacao com aumento de 10%: " + mais10.toFixed(2);
}

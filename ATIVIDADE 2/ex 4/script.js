// Funcao chamada ao clicar no botao
function calcularPedido() {
  // Pegando os sabores digitados
  var sabor1 = document.getElementById("sabor1").value;
  var sabor2 = document.getElementById("sabor2").value;
  var sabor3 = document.getElementById("sabor3").value;
  var sabor4 = document.getElementById("sabor4").value;

  // Pegando a quantidade de refrigerantes
  var refri = Number(document.getElementById("refri").value);

  // Calculando o valor total
  var valorPizzas = 4 * 12; // 4 sabores, cada um custa 12
  var valorRefrigerantes = refri * 7; // cada refrigerante custa 7
  var total = valorPizzas + valorRefrigerantes;

  // Exibindo os sabores e o valor total
  document.getElementById("resultado").innerText =
    "Sabores escolhidos:\n" +
    "- " + sabor1 + "\n" +
    "- " + sabor2 + "\n" +
    "- " + sabor3 + "\n" +
    "- " + sabor4 + "\n\n" +
    "Total a pagar: R$ " + total.toFixed(2);
}

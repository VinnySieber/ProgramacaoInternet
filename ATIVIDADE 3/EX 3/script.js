// Funcao que calcula os valores quando o botao e clicado
function calcularVendas() {
  // Pega o valor digitado no campo de paes
  var paes = document.getElementById("paes").value;

  // Pega o valor digitado no campo de broas
  var broas = document.getElementById("broas").value;

  // Converte os valores para numeros
  paes = Number(paes);
  broas = Number(broas);

  // Preco do pao e da broa
  var precoPao = 0.12;
  var precoBroa = 1.50;

  // Calcula o total arrecadado
  var total = (paes * precoPao) + (broas * precoBroa);

  // Calcula quanto guardar na poupanca (10% do total)
  var poupanca = total * 0.10;

  // Mostra os resultados na tela
  document.getElementById("resultado").innerText =
    "Total arrecadado: R$ " + total.toFixed(2) + "\n" +
    "Valor para guardar na poupanca: R$ " + poupanca.toFixed(2);
}

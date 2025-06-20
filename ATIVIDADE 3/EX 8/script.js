// Funcao chamada ao clicar no botao
function calcularTotal() {
  // Pega as quantidades digitadas
  var pequenas = document.getElementById("pequenas").value;
  var medias = document.getElementById("medias").value;
  var grandes = document.getElementById("grandes").value;

  // Converte para numeros
  pequenas = Number(pequenas);
  medias = Number(medias);
  grandes = Number(grandes);

  // Precos fixos
  var precoPequena = 10;
  var precoMedia = 12;
  var precoGrande = 15;

  // Calcula o valor total
  var total = (pequenas * precoPequena) + (medias * precoMedia) + (grandes * precoGrande);

  // Mostra o resultado
  document.getElementById("resultado").innerText = 
    "Valor total arrecadado: R$ " + total.toFixed(2);
}

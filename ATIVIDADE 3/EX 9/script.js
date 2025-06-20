// Funcao chamada quando o botao e clicado
function calcularDistancia() {
  // Pega os valores digitados
  var x1 = Number(document.getElementById("x1").value);
  var y1 = Number(document.getElementById("y1").value);
  var x2 = Number(document.getElementById("x2").value);
  var y2 = Number(document.getElementById("y2").value);

  // Aplica a formula da distancia
  var dx = x2 - x1;
  var dy = y2 - y1;
  var distancia = Math.sqrt(dx * dx + dy * dy);

  // Mostra o resultado com 2 casas decimais
  document.getElementById("resultado").innerText =
    "A distancia entre os pontos e: " + distancia.toFixed(2);
}

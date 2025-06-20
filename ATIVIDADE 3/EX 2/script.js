// Funcao chamada quando o botao for clicado
function calcularFerraduras() {
  // Pegamos o valor digitado no campo de entrada
  var cavalos = document.getElementById("cavalos").value;

  // Convertendo para numero
  cavalos = Number(cavalos);

  // Cada cavalo precisa de 4 ferraduras
  var ferraduras = cavalos * 4;

  // Mostra o resultado na tela
  document.getElementById("resultado").innerText = "Total de ferraduras necessarias: " + ferraduras;
}

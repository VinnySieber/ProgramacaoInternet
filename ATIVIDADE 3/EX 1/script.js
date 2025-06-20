// Funcao chamada quando o botao for clicado
function calcularArea() {
  // Pegamos o valor da largura do campo de entrada
  var largura = document.getElementById("largura").value;

  // Pegamos o valor do comprimento do campo de entrada
  var comprimento = document.getElementById("comprimento").value;

  // Convertendo os valores para numeros
  largura = Number(largura);
  comprimento = Number(comprimento);

  // Calculando a area
  var area = largura * comprimento;

  // Mostrando o resultado na tela
  document.getElementById("resultado").innerText = "A area do terreno e: " + area + " metros quadrados";
}

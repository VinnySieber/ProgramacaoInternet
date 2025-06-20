// Funcao chamada ao clicar no botao
function calcularArea() {
  // Pega o valor digitado no campo
  var raio = Number(document.getElementById("raio").value);

  // Define pi como 3.14
  var pi = 3.14;

  // Calcula a area
  var area = pi * raio * raio;

  // Mostra o resultado com duas casas decimais
  document.getElementById("resultado").innerText =
    "A area da pizza e: " + area.toFixed(2) + " cm2";
}

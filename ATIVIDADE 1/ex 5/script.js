// Função chamada quando o botão é clicado
function verificarMaior() {
  // Pegando os dois valores digitados e transformando em números
  var v1 = Number(document.getElementById("valor1").value);
  var v2 = Number(document.getElementById("valor2").value);

  // Comparando os valores
  if (v1 > v2) {
    document.getElementById("resultado").innerText = "O maior valor é: " + v1;
  } else if (v2 > v1) {
    document.getElementById("resultado").innerText = "O maior valor é: " + v2;
  } else {
    document.getElementById("resultado").innerText = "Os dois valores são iguais.";
  }
}

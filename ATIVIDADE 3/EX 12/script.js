// Funcao chamada ao clicar no botao
function separarDigitos() {
  // Pega o numero digitado
  var numero = Number(document.getElementById("numero").value);

  // Calcula a centena, dezena e unidade
  var centena = Math.floor(numero / 100);
  var dezena = Math.floor((numero % 100) / 10);
  var unidade = numero % 10;

  // Mostra os resultados
  document.getElementById("resultado").innerText =
    "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
}

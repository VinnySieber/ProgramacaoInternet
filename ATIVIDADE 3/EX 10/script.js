// Funcao chamada quando o botao e clicado
function converterTempo() {
  // Pega o valor digitado
  var totalDias = Number(document.getElementById("dias").value);

  // Cada ano tem 360 dias
  var anos = Math.floor(totalDias / 360);

  // Resto apos tirar os anos
  var resto = totalDias % 360;

  // Cada mes tem 30 dias
  var meses = Math.floor(resto / 30);

  // Dias restantes
  var dias = resto % 30;

  // Mostra o resultado
  document.getElementById("resultado").innerText =
    "Tempo sem acidentes: " + anos + " ano(s), " + meses + " mes(es), " + dias + " dia(s)";
}

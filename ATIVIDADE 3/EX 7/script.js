// Funcao chamada ao clicar no botao
function calcularDias() {
  // Pega o mes digitado
  var mes = document.getElementById("mes").value;

  // Pega o dia digitado
  var dia = document.getElementById("dia").value;

  // Converte os valores para numeros
  mes = Number(mes);
  dia = Number(dia);

  // Calcula os dias passados desde o inicio do ano
  // Cada mes tem 30 dias
  var totalDias = (mes - 1) * 30 + dia;

  // Mostra o resultado na tela
  document.getElementById("resultado").innerText =
    "Ja se passaram " + totalDias + " dias desde o inicio do ano.";
}

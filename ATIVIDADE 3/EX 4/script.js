// Funcao que calcula os dias de vida
function calcularDias() {
  // Pega o nome digitado
  var nome = document.getElementById("nome").value;

  // Pega a idade digitada
  var idade = document.getElementById("idade").value;

  // Converte idade para numero
  idade = Number(idade);

  // Calcula os dias (365 dias por ano)
  var dias = idade * 365;

  // Cria a mensagem
  var mensagem = nome.toUpperCase() + ", VOCE JA VIVEU " + dias + " DIAS";

  // Mostra a mensagem no paragrafo
  document.getElementById("resultado").innerText = mensagem;
}

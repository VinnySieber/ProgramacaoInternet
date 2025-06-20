// Funcao chamada quando o botao for clicado
function calcular() {
  // Pegando os valores digitados e convertendo para numeros
  var numero1 = Number(document.getElementById("n1").value);
  var numero2 = Number(document.getElementById("n2").value);

  // Realizando as operacoes
  var soma = numero1 + numero2;
  var subtracao = numero1 - numero2;
  var multiplicacao = numero1 * numero2;
  var divisao = numero1 / numero2;

  // Exibindo os resultados, um por linha
  document.getElementById("resultado").innerText =
    "Soma: " + soma + "\n" +
    "Subtracao: " + subtracao + "\n" +
    "Multiplicacao: " + multiplicacao + "\n" +
    "Divisao: " + divisao.toFixed(2);
}

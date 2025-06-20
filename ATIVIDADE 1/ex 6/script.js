// Função que encontra o menor entre os quatro valores
function encontrarMenor() {
  // Pegando os valores digitados e convertendo para números
  var n1 = Number(document.getElementById("v1").value);
  var n2 = Number(document.getElementById("v2").value);
  var n3 = Number(document.getElementById("v3").value);
  var n4 = Number(document.getElementById("v4").value);

  // Usando Math.min() para descobrir o menor
  var menor = Math.min(n1, n2, n3, n4);

  // Exibindo o menor valor encontrado
  document.getElementById("resultado").innerText = "O menor valor e: " + menor;
}

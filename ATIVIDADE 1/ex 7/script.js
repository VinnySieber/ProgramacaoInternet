// Funcao chamada ao clicar no botao
function verificarImpar() {
  // Pegando o valor digitado e convertendo para numero
  var numero = Number(document.getElementById("valor").value);

  // Verificando se o numero e impar usando o operador %
  if (numero % 2 !== 0) {
    document.getElementById("resultado").innerText = "O numero e impar.";
  } else {
    document.getElementById("resultado").innerText = "O numero nao e impar.";
  }
}

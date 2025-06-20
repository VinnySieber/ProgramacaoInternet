// Funcao chamada ao clicar no botao
function calcularSalario() {
  // Pega o salario digitado
  var salarioInicial = Number(document.getElementById("salario").value);

  // Calcula o salario com aumento de 15%
  var salarioComAumento = salarioInicial * 1.15;

  // Calcula o salario final com desconto de 8%
  var salarioFinal = salarioComAumento * 0.92;

  // Mostra os valores com duas casas decimais
  document.getElementById("resultado").innerText =
    "Salario inicial: R$ " + salarioInicial.toFixed(2) + "\n" +
    "Salario com aumento: R$ " + salarioComAumento.toFixed(2) + "\n" +
    "Salario final com desconto: R$ " + salarioFinal.toFixed(2);
}

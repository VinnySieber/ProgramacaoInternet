// Funcao chamada ao clicar no botao
function calcularIngredientes() {
  // Pega o valor digitado e transforma em numero
  var pessoas = Number(document.getElementById("pessoas").value);

  // Calcula os ingredientes
  var ovos = pessoas * 2;
  var queijo = pessoas * 50;

  // Mostra o resultado na tela
  document.getElementById("resultado").innerText =
    "Serao necessarios " + ovos + " ovos e " + queijo + " gramas de queijo.";
}

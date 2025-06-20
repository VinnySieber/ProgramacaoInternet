// Esta função será executada quando o botão for clicado
function reajustarSaldo() {
  // Pegando o valor do saldo digitado
  var saldo = Number(document.getElementById("saldo").value);

  // Calculando o reajuste de 1% (1% = 0.01)
  var reajustado = saldo + (saldo * 0.01);

  // Mostrando o saldo com reajuste
  document.getElementById("resultado").innerText = "Saldo com reajuste: R$ " + reajustado.toFixed(2);
}

function calcularTroco() {
 
  var produto = Number(document.getElementById("valorProduto").value);
  var pago = Number(document.getElementById("valorPago").value);

  var troco = pago - produto;

  if (troco < 0) {
    document.getElementById("resultado").innerText = "Valor pago é insuficiente!";
  } else {
    document.getElementById("resultado").innerText = "Troco: R$ " + troco.toFixed(2);
  }
}

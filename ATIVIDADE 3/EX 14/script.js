function dividirConta() {
  // Pega o valor total da conta
  var total = Number(document.getElementById("total").value);

  // Divide o valor por 3 para saber quanto cada um deveria pagar
  var valorPorPessoa = total / 3;

  // Carlos e Andre pagam a parte inteira (sem centavos)
  var carlos = Math.floor(valorPorPessoa);
  var andre = Math.floor(valorPorPessoa);

  // Felipe paga o resto da conta
  var felipe = total - (carlos + andre);

  // Mostra os resultados formatados com duas casas decimais
  document.getElementById("resultado").innerText =
    "Carlos deve pagar: R$ " + carlos.toFixed(2) + "\n" +
    "Andre deve pagar: R$ " + andre.toFixed(2) + "\n" +
    "Felipe deve pagar: R$ " + felipe.toFixed(2);
}

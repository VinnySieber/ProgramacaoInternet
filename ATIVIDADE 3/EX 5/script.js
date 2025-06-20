// Funcao chamada quando o botao e clicado
function calcularLitros() {
  // Pega o preco do litro digitado
  var preco = document.getElementById("preco").value;

  // Pega o valor que o motorista vai pagar
  var valor = document.getElementById("valor").value;

  // Converte os valores para numeros
  preco = Number(preco);
  valor = Number(valor);

  // Calcula quantos litros ele consegue colocar
  var litros = valor / preco;

  // Mostra o resultado com duas casas decimais
  document.getElementById("resultado").innerText = 
    "Voce conseguiu colocar " + litros.toFixed(2) + " litros no tanque.";
}

// Esta função é chamada quando o botão é clicado
function calcularMedias() {
  // Pegando os valores digitados e convertendo para número
  var n1 = Number(document.getElementById("n1").value);
  var n2 = Number(document.getElementById("n2").value);
  var n3 = Number(document.getElementById("n3").value);

  // Média aritmética: soma dos três números dividida por 3
  var mediaAritmetica = (n1 + n2 + n3) / 3;

  // Média ponderada: (n1*3 + n2*2 + n3*5) / 10
  var mediaPonderada = (n1 * 3 + n2 * 2 + n3 * 5) / 10;

  // Soma das médias
  var somaDasMedias = mediaAritmetica + mediaPonderada;

  // Média das médias
  var mediaDasMedias = somaDasMedias / 2;

  // Mostrando os resultados
  document.getElementById("resultado").innerText =
    "Media Aritmetica: " + mediaAritmetica.toFixed(2) + "\n" +
    "Media Ponderada: " + mediaPonderada.toFixed(2) + "\n" +
    "Soma das Medias: " + somaDasMedias.toFixed(2) + "\n" +
    "Media das Medias: " + mediaDasMedias.toFixed(2);
}

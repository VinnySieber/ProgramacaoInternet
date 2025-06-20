// Dados do problema
var capacidadeTanque = 100; // litros
var nivelAtual = capacidadeTanque / 4; // 1/4 do tanque, ou 25 litros
var consumo = 10; // km por litro
var distancia = 500; // km a percorrer

// Calcula quantos litros sao necessarios para percorrer a distancia
var litrosNecessarios = distancia / consumo;

// Calcula quanto precisa abastecer (se for positivo)
var litrosParaAbastecer = litrosNecessarios - nivelAtual;

// Se ja tiver suficiente, nao precisa abastecer
if (litrosParaAbastecer < 0) {
  litrosParaAbastecer = 0;
}

// Mostra o resultado no console
console.log("Litros que Pedro precisa abastecer: " + litrosParaAbastecer.toFixed(2));

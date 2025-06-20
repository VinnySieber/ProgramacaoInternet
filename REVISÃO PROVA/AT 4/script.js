// Dados do problema
var principal = 10000; // R$ 10.000,00
var tempo = 3; // 3 anos

// Opção A
var taxaA = 0.05; // 5% ao ano
var jurosA = principal * taxaA * tempo;
var totalA = principal + jurosA;

// Opção B
var taxaB = 0.06; // 6% ao ano
var jurosB = principal * taxaB * tempo;
var totalB = principal + jurosB;

// Exibe os resultados no console
console.log("Opcao A - Total ao final de 3 anos: R$ " + totalA.toFixed(2));
console.log("Opcao B - Total ao final de 3 anos: R$ " + totalB.toFixed(2));

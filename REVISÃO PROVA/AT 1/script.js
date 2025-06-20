// Tempo para vender 1 saquinho em minutos
var tempoPorSaquinho = 2;

// Minutos trabalhados por dia (8 horas * 60 minutos)
var minutosPorDia = 8 * 60;

// Saquinhos vendidos por dia
var saquinhosPorDia = minutosPorDia / tempoPorSaquinho;

// Dias trabalhados na semana
var diasPorSemana = 7;

// Total de saquinhos vendidos na semana
var totalSemana = saquinhosPorDia * diasPorSemana;

// Exibe o resultado no console
console.log("Saquinhos vendidos na semana: " + totalSemana);

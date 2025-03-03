/* Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

Tarefa: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão. */

const readlineSync = require("readline-sync");

console.log("=== Desafio de Código: Jornada do Herói ===");

let posicaoInicial = parseInt(
  readlineSync.question("Posição inicial do herói na floresta: ")
);
let totalPassos = parseInt(
  readlineSync.question("Número total de passos que o herói deve dar: ")
);

let posicaoFinal = posicaoInicial + totalPassos;

console.log(`Posicao final do heroi: ${posicaoFinal}`);

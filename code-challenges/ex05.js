/* Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido. */
const readlineSync = require("readline-sync");

console.log("=== Desafio de Código: Geração de Biomas em um Mundo de Blocos ===");

const quantidadeGolpes = parseInt(readlineSync.question());

let minerais = ["Pedra", "Carvão", "Ferro", "Diamante"];

for (let i = 1; i <= quantidadeGolpes; i++) {
  let minaIndex = i % minerais.length;

  console.log(i + ": " + minerais[minaIndex]);
}

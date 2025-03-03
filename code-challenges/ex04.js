/* Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

Tarefa: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar. */

const readlineSync = require("readline-sync");

console.log("=== Desafio de Código: Coleta de Tesouros no Dungeon ===");

const totalSalas = parseInt(readlineSync.question("Total de salas: "));

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

for (let sala = 1; sala <= totalSalas; sala++) {
  const temTesouro = salasComTesouro.includes(sala);
  const temMonstro = salasComMonstro.includes(sala);

  if (temTesouro == true) {
    print("Tesouro na sala " + sala + "!");
  } else if (temMonstro == true) {
    print("Monstro na sala " + sala + "!");
  }
}

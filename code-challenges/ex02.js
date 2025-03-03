/* Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão.

Tarefa: Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

Calculo do XP: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores fornecidos. */

const readlineSync = require("readline-sync");

console.log("=== Desafio de Código: Pontos de Experiência ===");

let nivelMonstro = parseInt(readlineSync.question("Nível do monstro: "));
let dificuldadeBatalha = parseInt(
  readlineSync.question("Nível de dificuldade da batalha (1 a 100): ")
);

function calcularXP(nivelMonstro, dificuldadeBatalha) {
  let xpGanho = nivelMonstro * dificuldadeBatalha * 100;

  console.log(`Você ganhou ${xpGanho} XP!`);
}

calcularXP(nivelMonstro, dificuldadeBatalha);

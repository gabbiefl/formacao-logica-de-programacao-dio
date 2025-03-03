/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal */

const readlineSync = require("readline-sync");

let vitorias = parseInt(
  readlineSync.question("Insira a quantidade de vitórias do jogador: ")
);
let derrotas = parseInt(
  readlineSync.question("Insira a quantidade de derrotas do jogador: ")
);

function verificarRanking(vitorias, derrotas) {
  let saldoRankeadas = vitorias - derrotas;
  let ranking = "";

  if (vitorias <= 10) {
    ranking = "Ferro";
  } else if (vitorias <= 20) {
    ranking = "Bronze";
  } else if (vitorias <= 50) {
    ranking = "Prata";
  } else if (vitorias <= 80) {
    ranking = "Ouro";
  } else if (vitorias <= 90) {
    ranking = "Diamante";
  } else if (vitorias <= 100) {
    ranking = "Lendário";
  } else {
    ranking = "Imortal";
  }
  return console.log(
    `O Herói tem de saldo de ${saldoRankeadas} está no nível de ${ranking}`
  );
}


verificarRanking(vitorias, derrotas);

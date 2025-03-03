/* 01) Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

const readlineSync = require("readline-sync");

let heroName = readlineSync.question("Nome do herói: ");
let heroXP = parseInt(readlineSync.question("XP do herói: "));
let heroLevel = "";

if (heroXP <= 1000) {
  heroLevel = "Ferro";
} else if ( heroXP <= 2000) {
  heroLevel = "Bronze";
} else if (heroXP <= 5000) {
  heroLevel = "Prata";
} else if (heroXP <= 7000) {
  heroLevel = "Ouro";
} else if (heroXP <= 8000) {
  heroLevel = "Platina";
} else if (heroXP <= 9000) {
  heroLevel = "Ascendente";
} else if (heroXP <= 10000) {
  heroLevel = "Imortal";
} else {
    heroLevel = "Radiante";
}

console.log(`O herói ${heroName} está no nível ${heroLevel}.`);
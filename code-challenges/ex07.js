/* Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item. */
const readlineSync = require("readline-sync");

class ItemMagico {
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    return this.tipo === "arma" ? this.dano * 2 : this.dano;
  }
}

const tipoItem = readlineSync.question("Tipo do Item: ");
const danoItem = parseInt(readlineSync.question("Dano do Item: "));
const resistenciaItem = parseInt(
  readlineSync.question("Resistência do Item: ")
);

const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

console.log("Tipo: " + itemPersonalizado.tipo);
console.log("Dano: " + itemPersonalizado.dano);
console.log("Resistencia: " + itemPersonalizado.resistencia);

const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);

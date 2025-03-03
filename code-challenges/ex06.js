/* Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

Tarefa: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.*/

const readlineSync = require("readline-sync");

console.log("=== Desafio de Código: Combinando Nomes de Pokémons ===");


function combinarNomePokemon(palavra) {
  let palavraPokemon = palavra + "saur";
  return palavraPokemon;
}

let nomeEntrada = readlineSync.question();
let palavraGerada = combinarNomePokemon(nomeEntrada);
console.log(palavraGerada);

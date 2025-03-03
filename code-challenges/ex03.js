/* No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander, Pikachu e Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido. */

const readlineSync = require("readline-sync");
const pokemonIniciais = ["Bulbasaur", "Charmander", "Pikachu", "Mewtwo"];

console.log("=== Desafio de Código: Capturando Pokémons Iniciais ===");

let escolhaDoTreinador = parseInt(
  readlineSync.question(
    "Escolha o seu Pokémon:\n [0] - Bulbasaur \n [1] - Charmander \n [2] - Pikachu \n [3] - Mewtwo \n"
  )
);

let pokemonEscolhido;

for (let index = 0; index < pokemonIniciais.length; index++) {1
  if (escolhaDoTreinador === index) {
    pokemonEscolhido = pokemonIniciais[index];
  }
}

console.log(
  "Você escolheu o " + pokemonEscolhido + " como seu Pokémon inicial!"
);

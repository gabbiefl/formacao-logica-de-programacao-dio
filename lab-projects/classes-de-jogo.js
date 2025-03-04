/* Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken) */

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo == "mago") {
      ataque = "magia";
    } else if (this.tipo == "ninja") {
      ataque = "shuriken";
    } else if (this.tipo == "monge") {
      ataque = "artes marciais";
    } else {
      ataque = "espada";
    }

    return `O ${this.tipo} ${this.nome} atacou usando ${ataque}!`;
  }
}

const mago = new Heroi("Gale", 35, "mago" );
const monge = new Heroi("Kai", 24, "monge");
const ninja = new Heroi("Raizo", 22, "ninja" );
const guerreiro = new Heroi("Lae'zel", 23, "guerreiro" );

console.log(mago.atacar());
console.log(monge.atacar());
console.log(ninja.atacar());
console.log(guerreiro.atacar());

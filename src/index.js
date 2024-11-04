class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque padrão';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

// Criando instâncias de heróis
const mago = new Heroi('Gandalf', 2000, 'mago');
const guerreiro = new Heroi('Conan', 30, 'guerreiro');
const monge = new Heroi('Liu Kang', 35, 'monge');
const ninja = new Heroi('Hattori Hanzo', 28, 'ninja');

// Chamando o método atacar
mago.atacar(); // Saída: o mago atacou usando magia
guerreiro.atacar(); // Saída: o guerreiro atacou usando espada
monge.atacar(); // Saída: o monge atacou usando artes marciais
ninja.atacar(); // Saída: o ninja atacou usando shuriken 
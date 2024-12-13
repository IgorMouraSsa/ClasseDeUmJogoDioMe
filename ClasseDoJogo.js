class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}
 
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 150, "mago");

heroi1.atacar(); 
heroi2.atacar(); 
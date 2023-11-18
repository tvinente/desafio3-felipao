class jogador {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }
    atacar() {
        let ataque

        switch (this.tipoHeroi) {
            case "Mago":
                ataque = "Magia"
                break
            case "Guerreiro":
                ataque = "Espada"
                break
            case "Monge":
                ataque = "Artes Marciais"
                break
            case "Ninja":
                ataque = "shuriken"

        }


        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)

    }

}

let dadosJogador = new jogador("Rafael", "20", "Ninja")
console.log(dadosJogador)
dadosJogador.atacar()
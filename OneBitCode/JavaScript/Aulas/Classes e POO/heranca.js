/*
    # Herança # 
        * É um recurso do paradigma Orientado a objetos
        * Permite que classes herdem caracteristicas de outras classes
            - Declaramos uma classe que vai herdar métodos e atributos de outra classe
        * É uma técnica de reuso de código
        * As duas classes dever ter uma relação de " é um"
            - Exemplo: Todo capitão é uma pessoa
            - Poderiamos ter uma classe Captain herdando de Person
*/

// Criando classe 
    class Spaceship {
        constructor(name, maxCrew, maxRecommendedVelocity){
            this.name = name
            this.maxCrew = maxCrew
            this.maxRecommendedVelocity = maxRecommendedVelocity
            this.currentVelocity = 0
        }
        // método
        speedUp(acceleration){
            this.currentVelocity += acceleration
            if(this.currentVelocity > this.maxRecommendedVelocity) {
                console.log("VELOCIDADE MÁXIMA ULTRAPASSADA!!\n Diminua ou poderá provocar danos á nave.")
            }
        }
    }
/* criando classe de herança (extends)
    * vai herdar tudo da classe Spaceship 
        - constructor
        - metodo
*/
// quando for instanciada já terá construtor / metodo speedUp herdado + metodo stop criado
    class BattleSpaceship extends Spaceship {
        stop() {
            this.currentVelocity = 0
            console.log("Recolhendo armas e parando nave de batalha")
        }
    }

    class DiscoverySpaceship extends Spaceship {
        stop() {
            this.currentVelocity = 0
            console.log("Recolhendo equipamento de amostras e parando a nave de descoberta")
        }
    }
// Criando variaveis e passando os parametros para herdar das classes
    let darwin = new DiscoverySpaceship("Darwin", 10, 200) //name, maxCrew, maxRecommendedVelocity
    let fenix = new BattleSpaceship("Fenix", 8, 240)
    console.log(darwin)
    console.log(fenix)
// Chamando o metodo speedUp e passando parametro // 
// quando nao encontrou construtor padrão ele vai buscar na classe mae - Spacechip
    darwin.speedUp(210) // ultrapassou limite > 200
    fenix.speedUp(230) // nao ultrapassou limite < 240
// Chamando o metodo stop // neste caso encontrou stop na classe filha
    darwin.stop()
    fenix.stop()

/*  
    # Construtores e Instancias
        * Em grande maioria, as classe podem ser instanciadas
        * Instancia de uma classe é o que dá origem ao objeto
            - Dizemos que uma classe foi instanciada quando foi criado um objeto a partir de uma classe.
        * a Classe vêm com um método especial que chamamos de Construtor
            - utilizamos para definir valores iniciais dos atributos de um objeto
            - Este método é chamado quando criamos uma instancia de uma classe com palavra.
*/

    class SpacialStation {
        constructor(name, platformsQuality) {
            this.name = name
            this.platformsQuality = platformsQuality
        }
    }
    
    let observatory = new SpacialStation("Observatorio", 40) //chama o name e o platformsQaulity do construtor e passa o parametro
    console.log(observatory)
    

    // class com valor padrão
        * // quando não informado ele pega o valor padrao do construtor e atribui. Ex darwin
        class Spaceship {
            constructor(name, type = "Descoberta"){
                this.name = name
                this.type = type
            }
        }

        let darwin = new Spaceship("Darwin")
        let helmet = new Spaceship("Helmet", "Batalha")

        console.log(darwin) // recebeu o parametro type padrão - Descoberta
        console.log(helmet)
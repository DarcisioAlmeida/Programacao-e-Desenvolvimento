/*
    # Classe e Objeto
        * Todo Objeto é criado a partir de uma classe
        * A classe é um molde que é utilizado para criar um objeto
        * Dentro da classe nos conseguimos definir atributos e metódos que um objeto receberá
*/

class Spaceship { // metodo construtor vazio
}

let mySpaceship = new Spaceship()
console.log(mySpaceship)



/*
    # Revendo o aprendizado
        * O new serve para Arrays e Objetos
        * O Array é uma classe nativa do JavaScript
            - as funções são métodos internos á classe
            - forEach, filter, find, findIndex, etc..
            - São criadas no objeto no momento em que chamamos o new
            - Fazer let myArray = [] é equivalente a let myArray = new Array()
        * Com Objeto acotece o mesmo quando fazemos myObject ={}
            - estamos criando um objeto a partir de uma classe nativa do JavaScript chamada Object
        * Todos os tipos que vimos tem seu associados
            - String
            - Number
            - boolean
            - etc
        * Com as classes, conseguimos criar nossos proprios derivados
*/
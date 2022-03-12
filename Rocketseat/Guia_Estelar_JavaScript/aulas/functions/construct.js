/*
    Function constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

    function Person(name) {
        this.name = name // this pega a propriedade da const (mayk)
    }
        const mayk = new Person("mayk") // new é uma nova expressao e cria um objeto
        console.log(mayk) // tem uma propriedade chamada name
    

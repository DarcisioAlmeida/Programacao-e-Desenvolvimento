// function scope

/*
    let subject = 'create video'

    function createThink(subject) {
        subject = 'study'
        return subject
    } // neste caso a função pegou a palavra (create video) substituiu por (study) e retornou study - dentro escopo local

    console.log(subject) //escopo global - manteve a palavra (create video)
    console.log(createThink(subject)) // escopo local
*/

let subject = 'create video'

function createThink() {
    subject = 'study'
    return subject
} // neste caso a função pegou a palavra (create video) substituiu por (study) e retornou study - dentro escopo local

console.log(createThink(subject)) // escopo local
console.log(subject) //escopo global - substituiu a palavra (study)

//cuidado com ordem que chama o console // para nao haver alterações
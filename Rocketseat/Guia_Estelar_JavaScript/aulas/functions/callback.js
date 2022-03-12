// callback function (chamar de volta)

function sayMyName(name) {
    console.log('antes de executar a função callback')
    
    name() //sayMyName abaixo e atribui ao sayMyName(name)

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em um callback')
    }
)

// Neste exemplo um callback é uma função passando um parametro para outra função
// chama uma função e depois chama outra de volta
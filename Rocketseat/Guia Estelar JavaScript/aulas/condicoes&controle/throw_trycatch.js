// throw (disparar, lançar)
    function sayMyName(name = '') {
        if (name === ''){
            throw 'Nome é obrigatorio'
        }
        console.log('depois do erro')
    }

// try (tentar)...catch(capturar)
    try {
        sayMyName()
    } catch(e) {
        console.log(e)
    }
console.log('após a função erro')

// throw tenta disparar a função, o try tentar executar a função , catch captura o erro e segue a função
// usado para capturar erros e não parar as funções 
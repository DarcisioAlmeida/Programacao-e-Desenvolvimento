// Aqui tem um comentario em linha//
/* Aqui comentario de multilinha ou de bloco */
console.log('Bem vindo ao Starter') 

// ENTENDA ISSO // 

// SCOPE - Declaração de Blocos - Block Statement

    // var é global e, também local

    // hoisting - quando a var não é definida no escopo global o JS pega a var definida no local e eleva para o global com undefined 


console.log('> existe uma variavel x antes do bloco? ', x)
{
    var x = 0 // escopo local é tudo que existe dentro do escopo
}

console.log('> existe x depois do bloco? ', x)

// escopo global pega os itens fora do blobo {} tudo que é executado dentro da aplicação - dentro e fora de blocos

// # ATENÇÃO:

    //const e let são locais e só funcionam no escopo onde foi criada
    {
        let y = 0
        console.log('> existe y ', y)
    }
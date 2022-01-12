/*
    Arrow Function 
        - é uma função anonima simplificada
        - substitui a palavra função por =>
        - colocado logo após o (parametro) parametro
        - pode ser usado tb sem () parametro
        - permite simplicar função de 1 linha
        
        sixtase - // 
            const doubleVelocity = () => { 
                <bloco de codigo>
            }
*/

const doubleVelocity = (velocity) => {
    return velocity * 2
}

console.log(doubleVelocity(60))

/*
    // Função acima Simplificada - apenas em casos de 1 linha

    const doubleVelocity = velocity => velocity * 2

    console.log(doubleVelocity(60))
*/
// Type conversion (typecasting) vs Type coersion
   // forma de converter dados onde posso fazer manualmente ou JS faz por tras sem perceber

/*
    FALSY
    quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
//obrigatotio uso de um booleano no primeiro item
    console.log(false ? 'verdadeiro' : 'false')
    console.log(-0 ? 'verdadeiro' : 'false')
    console.log(null ? 'verdadeiro' : 'false')

/*
    TRUTHY - confiavel
        quando um valor é considerado true em contextos onde um booleano é obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

    console.log(true ? 'verdadeiro' : 'false')
    console.log({} ? 'verdadeiro' : 'false')

*/

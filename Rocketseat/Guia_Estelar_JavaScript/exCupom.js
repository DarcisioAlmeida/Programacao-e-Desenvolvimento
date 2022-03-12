/* 
    Cupom RANGOBARATO 
        * Valido apenas das 12hs até as 13h59 (14h não pode)
        * se tiver cupom e estiver dentro do horário, tem 10% de desconto
        * se além disso, a compra for de 100 reais, desconto de 20%
    
        # Imprimrir o valor do desconto.
*/

function imprimirValorDesconto(valorCompra, hora, cupom) {
    let valorDesconto;
    if (cupom === "RANGOBARATO") {
        if (hora >= 12 && hora < 14) {
            if (valorCompra >= 100){
                valorDesconto = valorCompra *20/100;
            } else {
                valorDesconto = valorCompra *10/100;
            }
            console.log(`O Valor do desconto é ${valorDesconto}`)
        } else {
            console.log("Esse cupom não é valido este horário.")
        }
    } else {
        console.log("Você não possui nenhum cupom aplicável.")
    }
}

imprimirValorDesconto(150,13,"RANGOBARATO")

imprimirValorDesconto(200,13,"RANGOBARATO")
imprimirValorDesconto(50,13,"RANGOBARATO")
imprimirValorDesconto(200,15,"RANGOBARATO")
imprimirValorDesconto(50,13,"RANGOBOM")

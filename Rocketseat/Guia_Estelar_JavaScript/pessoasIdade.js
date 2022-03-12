// Calcular Pessoas por idade //

const pessoas = [
    {
        nome: "Stella",
        idade: 30
    },
    {
        nome: "Lorena",
        idade: 16
    },
    {
        nome: "Catarina",
        idade: 18
    }
];
 

function criarRelatorio(lista){
    let maiores = 0;
    let menores = 0;

    for(let item of lista) {
        const idade = item.idade;
        if (idade >= 18){
            maiores++ ;
        } else {
            menores++
        }
    }
    const resposta = {
        qtdMaiores: maiores,
        qtdMenores: menores,
        percMaiores: maiores / pessoas.length,
        percMenores:menores /pessoas.length
    }
    console.log(resposta);
}
criarRelatorio(pessoas);
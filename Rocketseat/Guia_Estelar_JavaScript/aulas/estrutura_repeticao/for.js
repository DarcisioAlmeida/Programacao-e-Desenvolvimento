// Estrutura de repetição

/*For 
    3 coisas importantes:
        1 inicialização variavel
        2 condição de continuação loop
        3 expressao final ao termino loop
*/


for(let i = 1; // inicialização variavel
     i <= 10; //continuação loop
     i ++) //expressao final
    {
    console.log(i)
}
/*
    // Break - para a execução do loop quando atingir o desejado // neste caso 50
    for(let i = 100; i > 0; i--){
        if (i === 50) {
            break; 
        }
        console.log(i)
    }
*/

/*
    // continue - pula a execução do momento // neste caso pulou o numero 5
    for(let i = 10; i > 0; i--){
        if(i === 5){
            continue;
        }
        console.log(i)
    }
*/
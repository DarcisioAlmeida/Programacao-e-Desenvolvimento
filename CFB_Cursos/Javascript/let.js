/* Let - Variavel declarada no escopo local 
       - escopo onde foi declarada
*/
// Diferença de var e let

    //veja que o console.log responde na 3 opções. var é global
        var num =10;
        console.log(num)
        if(num==10){
            console.log(num)
        }
        console.log(num+ "\n")
    //  veja resultados do console.log // let é variavel local dentro de escopo  
        var num1 =10;
        console.log(num1)
        if(num1==10){
            let num1=5;
            console.log(num1)
        }
        console.log(num1+ "\n")
    //  veja resultados do console.log // let é variavel local dentro de escopo  
    let num2 =10;
    console.log(num2)
    if(num2==10){
        num2=5;
        console.log(num2)
    }
    console.log(num2)
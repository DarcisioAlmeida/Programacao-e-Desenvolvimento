/* Função */

// função simples = sem parametros e sem retorno
    function escreve(){
        console.log("Curso de Java Script");
    }

    escreve();
    escreve();

// função recebendo Parametros 
    function soma(n1, n2){
        var res= n1 + n2;
        console.log(res + "\n");
    }
    soma(5,2);
    soma(10,15);
    soma(30,42);

// funçao recebendo parametros e retornando valores

    function soma2(n3, n4){
        return n3 + n4;
    }
    console.log(soma2(3,15));

// funçao recebendo parametros e retornando valores com Arrays
    var numeros=new Array(10,2,5,30,25,19,20,56);

    function media(nums){
        var tam= nums.length;
        var somar=0;
        for(var i=0; i<tam; i++){
            somar+=nums[i];
        }
        return Math.round(somar/tam);
    }
    console.log(media(numeros));   
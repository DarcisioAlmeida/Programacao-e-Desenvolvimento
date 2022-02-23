/*
    Em guerras, informação é tudo. Por isso, especialmente durante guerras ,uitas tecnologias de criptografia foram 
    desenvolvidas.
    Objetivo é fazer um decodificador de uma linguagem que apenas estadantes podem compreender, a Arrobash.
        Nesta linguagem, cada letra é representada utilizando apenas uma combinação de @ e #.
        Neste alfabeto existem apenas as letras: CUBADEMY.
            A tarduação é a seguinte:
                C = ###
                U = ##@
                B = #@#
                A = #@@
                D = @##
                E = @#@
                M = @@#
                Y = @@@
        Faça um código que decodifique qualquer texto escrito em Arrobach
            Input Format
                A entrada será sempre um string contendo apenas os simbolos @ Ou # 
            Constraints
                A entrada sempre será no máximo 100 caracteres;
            Output Format
                Imprima na tela o texto decodigficado utilizando as letras CUBADEMY, sempre maiúsculas
            Sample Input 0
                #@@####@@@##@#@@@#@@@
            Sample Output 0
                ACADEMY
*/

function solucao(textoCodificado) {
    const dicionario = {
    "###" : "C",
    "##@" : "U",
    "#@#" : "B",
    "#@@" : "A",
    "@##" : "D",
    "@#@" : "E",
    "@@#" : "M",
    "@@@" : "Y",
    };

    let resposta = "";
    for (i = 0; i < textoCodificado.length; i +=3) {
        const pedaco = textoCodificado[i] + textoCodificado[i + 1] + textoCodificado[i + 2];
        resposta += dicionario(pedaco);
    }
    console.log(resposta);
}


function processData(input) {
    solucao(input)
}

processData.stdin.resume();
processData.stdin.setEncoding("ascii");
_input = "";
processData.stdin.on("data", function(input) {
    _input += input;
});
processData.stdin.on("end", function() {
    processData(_input);
});


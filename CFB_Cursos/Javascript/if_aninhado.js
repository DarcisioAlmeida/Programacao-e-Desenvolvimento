/*
    Sistema de notas com If aninhado!
*/

var nota = 22;
var res;

if (nota >= 90) {
    res ="Aprovado";
        if (nota == 100) {
            res +=" com Excelência"
        } else if (nota > 95){
            res += (" com Qualidade")
        } else {
            res += (" Normal")
        }
} else if (nota >= 70) {
    res = "Aprovado";
        if (nota > 80){
            res += (" Passou bem")
        } else {
            res += (" Na média ")
        }
} else if (nota > 40 ) {
    res ="Recuperação";
        if (nota > 60){
            res += (" Você precisa melhorar")
        } else {
            res += (" Você foi mal")
        }
} else {
    res ="Reprovado";
        if (nota > 30){
            res += (" Vamos estudar mais um pouco")
        } else {
            res += (" Você esta muito fraco")
        }
}
console.log(res)


/* 
    Desenvolvendo Swtich Case
 */

    var pos, msg;

    pos = 2;

    switch(pos){
        case 1: 
            msg = " Parabéns, você foi medalha de Ouro "; 
            break;
        case 2: 
            msg= " Legal, você ganhou medalha de Prata";
            break;
        case 3:
            msg= "Muito bom, você ganhou medalha de Bronze";
            break;
        default:
            msg= " Que pena infelizmente desta vez não deu, Sem medalha!";
    }

    switch(pos){
        case 1:
        case 2:
        case 3:
            msg += "\n Subiu ao podio";
            break;
        default:
            msg += "\n Não obteve colocação ";
    }

    console.log(msg)
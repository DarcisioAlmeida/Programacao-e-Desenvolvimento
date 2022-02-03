/* 
    for = inicialização > execução > incremento ou decremento
        loop numero determinado de vezes
    
*/
//for
    var cont;
    for (cont = 0; cont < 10; cont++) {
        console.log("Darcisio Almeida")
    }

//for uso array
    var cont2;
    var num=[];
    num.push(0,1,2,3,4);
    for (cont2 = 0; cont2 < 5; cont2 ++) {
        console.log(num[2]) 
    } 

//for uso array bidimensional (matrizes)
    var mochila =[
        ["Corda", 1],
        ["Cura", 10],
        ["Lanterna", 1],
        ["Pilhas", 20]
    ];

    for (var l = 0; l < 4; l ++){
        for (var c = 0; c < 2; c ++){
            console.log(mochila[l][c] + " ");
        }
        
    }
    console.log(mochila[1][1], mochila[1][0])
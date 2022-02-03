/*
    # Recursividade
        Funçõa que chama ela propria.
        Facilita e simplifica o codigo
        substitui rotinas de loops (while, do while, for)

        quando usar - 
*/

// Exemplo Contador //
    function contador(min, max){
        console.log(min);
        if(min < max){
            contador(++min, max); // sempre deve ser pre-incremento
        }
    }
    contador(0, 10)

// Exemplo Fatorial //
    function fatorial(n){
        if(n==1){
            return 1;
        }
        return n * fatorial(n-1);
    }
    console.log(fatorial(5)) 
    // 5! = 5*4*3*2*1 = 120

    /*
        // Exemplo em animation frame em uma div //
            var obj = document.getElementByID('quad');
            var ang = 0
            var anima;
            function gira(){
                obj.style.transform="rotate("+ang+ "deg)";
                ang++
                if(ang > 360){
                    ang = 0 ;
                }
                anima=requestAnimationFrame(gira);
            }
            gira();
    */
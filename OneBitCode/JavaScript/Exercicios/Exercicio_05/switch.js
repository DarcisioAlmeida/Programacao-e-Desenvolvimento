/*
    Fixando uso do Switch
            Fazendo um conversos de distancias espaciais.
            colocar uma distnacia em anos-luz (l.y) e converter par unidade desejada.
        O Conversos deve:
            1. Perguntar a distancia em anos-luz
            2. Oferecer uma lista de opções com 
                a. Parsec(pc)
                b. Unidade Astronômica(AU) 
                c. Quilômetros(km)
            3. Perguntar qual operação deseja realizar  
                A resposta receberá o numero da opção escolhida
            4. Utilizar o Switc para verificar a opção escolhida pelo usuario
                - Armazenar o nome da unidade   
                - Armazenar o valor convertido de anos-luz par aunidade desejada
            5. Exibir alerta contendo a distancia em anos-luz e a distancia convertida para cada operação desejada
                - Distancia em anos-luz:    
                    <distancia digitada em anos-luz> 
                    <conversao desejada>: <distancia convertida>
            6. Utilizar as seguintes conversoes
                1 l.y. = 0,306601pc
                1 l.y. = 63241,1AU
                1 l.y. = 9,5 * (10 elevado a 12)
                
*/

let distanciaAnoLuz = prompt("Digite a distancia em Anos Luz")

let choosenOption = prompt ("Escolha uma das opções de Conversão \n1- Parsec(pc) \n2- Unidade Astronômica(AU) \n3- Quilômetros(km)\n\n(Digite o número da opção desejada)")

let choosenUnity
let converterDistance

switch(choosenOption) {
    case "1":
        choosenUnity = "Parsec"
        converterDistance = distanciaAnoLuz * 0.306601
        break
    case "2":
        choosenUnity = "Unidade Astronômica"
        converterDistance = distanciaAnoLuz * 63241.1
        break
    case "3":
        choosenUnity = "Quilômetros"
        converterDistance = distanciaAnoLuz * 9.5 * Math.pow(10,12) //math.pow - eleva o numero 10 ao 12 
        break
   default:
        choosenUnity = "Unidade não identificada"
        converterDistance = "Conversão fora do escopo"
}

alert("Distancia em Anos Luz: " + distanciaAnoLuz + "\n" + choosenUnity + " : " + converterDistance )
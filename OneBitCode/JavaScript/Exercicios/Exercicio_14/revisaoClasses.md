/*
    Revisão de Classes - Exercicio
        * Cria um sistema de monitoramento de nave espacial 
        * Logo que o sistema é iniciado, ele deve pedir os dados da nave
        * Para a nave, que for cadastrada precisamos de: 
            - Nome
            - Quantidade de Tripulantes
        * A nave pode ser de batalha ou de transporte
        * Caso seja de batalha: ele também deverá pedir quantas arma a nave tem disponíveis
        * Caso seja de transporte: o número de lugares que ela comporta
        * Além disso, a nave deve ser iniciada com velocidade atual igual a 0.
        * um menu deverá ser apresentado ao usuario com as opções:
            1- Acelerar a nave
            2- Trocar a nave
            3- Imprimir e sair
        * Para acelerar a nave é necessário pedir aceleração
        * A Velocidade deve aumentar 83% da aceleração passada como parametro devido a taxa de desaceleração
        * Para nossa aplicação, toda aceleração tem uma taxa de desaceleração fixa de 17%
            Velocidade atual + (aceleração * (1 - taxa de desaceleração))
        * Deve ter funcionalidade de trocar a nave
        * Para trocar, todos os dados de cadastro serão solicitados novamente e a nova nave será iniciada com velocidade 0
        * Na ultima opção, precisaremos imprimir a espaçonave e sair
        * A impressão deve ser no formato:
            Nome: < nome>
            Quantidade de tripulantes: <quantidade>
            Velocidade atual: <velocidade atual>
*/
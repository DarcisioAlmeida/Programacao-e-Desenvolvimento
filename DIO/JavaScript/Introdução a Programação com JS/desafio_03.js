/*
    // ### Desafio --- FOLHA DE PAGAMENTO --
    Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

    // ### Entrada
    Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

    // ### Saída
    Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

    Exemplos de Entrada	                            Exemplos de Saída
        25
        100                                             NUMBER = 25
        5.50                                            SALARY = U$ 550.00

        1
        200                                             NUMBER = 1
        20.50                                           SALARY = U$ 4100.00

        6
        145                                             NUMBER = 6 
        15.55                                           SALARY = U$ 2254.75
*/

// Resolução do Código
    /* // Uso na Dio
        let number = parseInt(gets(25));
        let hours = parseInt(gets(100));
        let wage = parseFloat(gets(5.50));
    */
    let number = parseInt(25);
    let hours = parseInt(100);
    let wage = parseFloat(5.50);
    let salary = parseFloat(hours * wage).toFixed(2); 
    console.log("NUMBER = " + number);
    console.log("SALARY = U$ " + salary);
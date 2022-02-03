/* TRATAMENTO DE ERROS */

// TRY - IDENTIFICA ERRO E PASSA PRO CAT - CASO ACONTEÇA - PARA EXECUÇÃO
//  CAT VAI TRATAR O ERRO - INTERCEPTA 
// FINALLY - FINALIZA COM TRATAMENTO - PODE OU NAO SER USADO NOS SCRIPTS

    try {
        cosnole.logi("Darcisio Almeida") // erro no comando ele detecta // cat identifica e trata o erro com message
    } catch (e) {
        console.log("ERRO")
        console.log("Mensagem de erro: " + e.message +"\n");
    }

   // Outro exemplo - Erro manual com throw
    // caso o numero digitado seja maior que 10 vai gerar o erro e nao exzecuta o programa enviando para o catch
        var num; // maximo 10
        try{
            num=12;
            if (num>10){
                throw new Error('Valor invalido');
            }
            console.log("Valor: " + num);
        } catch (e) {
            console.log("Error: " +e.message)
        } finally {
            console.log("\nFim do tratamento");
        }
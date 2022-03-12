// Criando um calendario de dias da semana futuro //
// Poderia ser feito com Switch mas optei por tentar via IF Else //

    function diasSemana(dias) {
        const resto = dias % 7;

        if (resto == 0) {
            console.log("Domingo")
        } else if (resto == 1) {
            console.log("Segunda-Feira")
        }  else if (resto == 2) {
            console.log("Terça-Feira")
        }  else if (resto == 3) {
            console.log("Quarta-Feira")
        } else if (resto == 4) {
            console.log("Quinta-Feira")
        } else if (resto == 5) {
            console.log("Sexta-Feira")
        } else if (resto == 6) {
            console.log("Sábado")
        }
    }
    diasSemana(27);
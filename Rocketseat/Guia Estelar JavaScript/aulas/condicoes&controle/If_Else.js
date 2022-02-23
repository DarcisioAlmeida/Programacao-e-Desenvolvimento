// if ...else

/*
    let temperature = 38.5

    if(temperature >=37.5) {
        console.log("Você está com Febre Alta")
    } else if(temperature < 37.5 && temperature >= 37) {
        console.log("Você esta em estado Febril")
    } else {
        console.log("Você esta sem Febre")
    }
*/

    //# Forma melhor

    let temperature = 37.2
    let highTemperature = temperature >= 37.5
    let mediumTemperature = temperature < 37.5 && temperature >= 37

    if(highTemperature) {
        console.log("Você está com Febre Alta")
    } else if(mediumTemperature) {
        console.log("Você esta em estado Febril")
    } else {
        console.log("Você esta sem Febre")
    }

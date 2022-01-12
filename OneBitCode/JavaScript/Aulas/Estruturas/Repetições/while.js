let velocity = 50
let acceleration = 5

// while - avalia expressão no começo
    // somente executa o codigo enquanto for verdadeiro

while(velocity <= 100) {
    console.log("Acelerando: Estamos a " + velocity + "km/s")
    velocity += acceleration // velocity = velocity + accleleration
}

let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
    if(constellation[pos] == "a" || constellation[pos] == "A") {
        console.log(pos)
    } 
    pos += 1
}

/* O sinal += significa incrementar */
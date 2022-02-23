// For OF

// Serve pára Strings e Arrays

    let name = "Darcisio"
    let names = ['João', 'Pedro', 'Paulo']

    for(let char of name) {
        console.log(char)
    }

    for(let name of names) {
        console.log(name)
    }

// Outro exemplo

    const lista = ['Arroz',' Mandioca', 'Batata', 'ameixa', 'algodao', 'Pepino',' Chuchu', 'Abobora', 'Amora'];

    const resultado = [];

    for (let item of lista) {
        if(item[0] === "A" || item[0] === "a") {
            resultado.push(item);
        }
    }
    console.log(resultado);
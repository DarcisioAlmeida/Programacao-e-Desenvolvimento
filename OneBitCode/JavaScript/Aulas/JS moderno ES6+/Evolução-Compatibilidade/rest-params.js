// Rest Param - 
// Permite que uma função com operador Spread receba um numero inderterminado de parametros.
// estrutura e atribui em forma de array
// Rest param - Sempre tem que vir no final da função - ultimo parametro

function greetCrew(message, ...names) {
  console.log(names) // transformou em array com nomes
  names.forEach(name => console.log(`${message}, ${name}`))
}
greetCrew("Seja bem-vindo", "Artur", "Stella", "Lorena", "Melissa")
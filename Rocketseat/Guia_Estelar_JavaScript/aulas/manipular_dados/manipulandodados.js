// Manipulando Strings e Numeros

// Transformar um numero quebrado em casas decimais e trocar ponto por virgula

let number = 345.455788
console.log(number.toFixed(2).replace(".", ","))

// transformar letrar minusculas em maiusculas. Vice versa

let word = "Programar é muito bacana!"
console.log(word.toUpperCase()) //maiuscula

let pets = "CACHORROS SÃO LEGAIS"
console.log(pets.toLocaleLowerCase()) // minusculas

// encontrando palavras em frases

// verificando se o texto tem a palavra Amor

let phrase = "Eu quero viver!"
console.log(phrase.includes("amor")) // includes - checa se tem a palavra no texto

// separando strings
// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso transforme o array em um texto e onde eram espaços, coloque _

let text = " Eu quero viver o amor!"
let myArray = text.split(" ") // split separa o que quiser
let textWithUndesrcore = myArray.join("_") // join vai juntar
console.log(textWithUndesrcore)
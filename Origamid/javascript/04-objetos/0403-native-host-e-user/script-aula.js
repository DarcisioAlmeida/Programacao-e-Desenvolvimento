// confirmar se é undefined - se for o método não é compativel com browser
console.log(typeof Array) // existe
console.log(typeof Array.from) // existe

console.log(typeof Array.fromjdhsjkah !== "undefined") // nao existe

if(typeof Array.fromjdhsjkah !== "undefined") {
  console.log('Existe')
} else {
  console.log('Não existe')
}


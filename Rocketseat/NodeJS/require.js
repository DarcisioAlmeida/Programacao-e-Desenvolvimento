// console.log(require()) // não funciona sem argumento

// console.log(require(path))

// Função require serve para usarmos modulos dentro do NodeJS - // Modulos nativos do Node

const path = require('path')
console.log(path.basename(__filename))

// Terminal - node required

// Pegando uma informação de module criado arquivo exports.js
  const myModule = require('./exports')
  console.log(myModule)
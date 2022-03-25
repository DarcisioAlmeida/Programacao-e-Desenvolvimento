// clearTimeout responsável por cancelar qualquer timeout dentro da aplicação

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)

// terminal - node clearTimeout.js
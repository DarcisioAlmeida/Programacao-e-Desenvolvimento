// clearInterval reponsável por cancelar uma função setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout ( ()=> clearInterval(interval), 4000 )
// terminal - node clearInterval.js
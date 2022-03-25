/*
  const events =  require('events')
  console.log(events)

  // terminal - node events.js
*/
const {EventEmitter} = require('events')
const ev = new EventEmitter()
console.log(ev)

// on - varias vezes - sempre
ev.on('saySomenthing', (message)=> {
  console.log('Eu ouvi você!', message)
})
/*
// unica vez
ev.once('saySomenthing', (message)=> {
  console.log('Eu ouvi você!', message)
})
*/
ev.emit('saySomething', 'Darcisio') // emitindo evento
ev.emit('saySomething', 'Lori')
ev.emit('saySomething', 'Stella')

// Herdando do EventEmitter
const {inherits} = require('util')

function Character(name){
  this.name = name
}
util.inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', ()=> console,log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')

// terminal - node events.js
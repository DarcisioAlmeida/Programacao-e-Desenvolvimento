const getFlagValue = require('./frags')
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)


/* 
  no Terminal
  node greetings --name "Darcsio" --greeting "Tudo bom com você?"
*/

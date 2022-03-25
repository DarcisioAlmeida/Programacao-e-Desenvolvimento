// Process é global no node
console.log(process)

console.log(process.argv) // argv está dentro das variasções de process

// Terminal
// node process

const fistname = process.argv[2]
const lastname = process.argv[3]
console.log(`Seu nome é ${fistname} ${lastname}`)
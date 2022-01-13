//Arrow function 

testingArrow = {
  name: "Escola de Javascript",
  normalFunction: function() {
    console.log(this.name)
  },
  arrowFunction: () => {
    console.log(this.name)
  }
}

console.log(testingArrow.normalFunction()) // obedece o scopo do objeto
console.log(testingArrow.arrowFunction()) // so funciona no contexto de onde ela é executada por isso undefined
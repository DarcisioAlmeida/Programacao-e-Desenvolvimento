/*
    # Metodo Get e Set #
      - Simulador de variaveis para formatar valores que vao para atributos
      - Set atribui um valor a uma variavel
      - podemos chamar do mesmo jeito que chamamos a variavel ao receber um valor = 
      - Get retorna um valor a variavel // interpreta como variavel

*/
// Metodo Set //
  class TransportSpaceship {
    constructor(name) {
      this.name =  name
      this.currentVelocity = 0
    }
    // metodo set
    set velocity(newVelocity) {
      if(newVelocity > 120) {
        this.currentVelocity = 120
      } else {
        this.currentVelocity = newVelocity
      }
    } 
  }
  let spaceship = new TransportSpaceship("Transportador")
  spaceship.velocity = 130 // como velocity é maior que 120 ele setou o IF e parou. caso voce menor ele sera nova velocity else
  console.log(spaceship)


/*
    # Metodo Get e Set #
      - Simulador de variaveis para formatar valores que vao para atributos
      - Set atribui um valor a uma variavel
      - podemos chamar do mesmo jeito que chamamos a variavel ao receber um valor = 
      - Get retorna um valor a variavel // interpreta como variavel

*/

// Metodo Get //
  class ResourceProcessStation {
    constructor(name, monthlyProcessLoad) {
      this.name = name
      this.monthlyProcessLoad = monthlyProcessLoad
    }
    // metodo get
    get weeklyProcessLoad() {
      return this.monthlyProcessLoad / 4
    }
  }
  let resourceProcessor = new ResourceProcessStation("Gaia", 500)
  console.log(resourceProcessor.weeklyProcessLoad)

  resourceProcessor.monthlyProcessLoad = 600 // alterei a carga
  console.log(resourceProcessor.weeklyProcessLoad)

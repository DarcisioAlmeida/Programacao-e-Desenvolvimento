/* 
    # Metodos Estaticos #
        * São metodos chamados diretamente nas classes
        * São uteis quando teremos algo que não vai se alterar independente da instancia do objeto
        * Não permite chamar o metodo pelo objeto apenas pelo metodo da class

*/

class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
      this.name = name
      this.monthlyProcessing = monthlyProcessing
    }
    // metodo static
    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
    
}
// não instancia o objeto chama o metodo diretamente da classe
let totalProcessing =  ResourceProcessorStation.calculateProcessInHours(500, 6) 
console.log(totalProcessing)

// chamando atributo monthlyProcessing direto da classe
let processor = new ResourceProcessorStation("Gaia", 2000)
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10) 
console.log(totalProcessed)
/*
  Sincrono e Assincrono
    - Uma execução Sincrona segue um fluxo linear 
    - Executa passo a passo o trecho do código
    - Só Executa uma instrução após a anterior ter sido executada
    - A Execução Assincrona não segue este formato
    - Não aguarda o fim da execuçãoi para passar para o proximo passo 
    - Passa para a instrução seguinte sem aguardar a conclusão da atual
*/
function step02(){
  console.log("Passo 02")
}

console.log("Passou 01")
step02()
console.log("Passo 03")
console.log("Passo 04")
// setTimeout é assincrono 
setTimeout(() => {
  console.log("Passo 05")
}, 2000)
console.log("Passo 06")
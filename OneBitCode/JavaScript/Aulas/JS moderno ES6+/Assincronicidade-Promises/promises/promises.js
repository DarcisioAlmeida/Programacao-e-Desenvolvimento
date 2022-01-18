/* 
  O que são Promises
    - Basicamente dão suporte para operações assincronas
    - Guardam a operação que precisamos dentro de um objeto cuja classe é chamada de Promise
    - Quando precisamos executar, basta chamar este objeto
    - Possui quatro estados: 
        - Pendente: quando a Promise é criada e ainda nao foi executada
        - Realizada: quando teve sucesso na operação
        - Recusada: quando teve falha na operação
        - Estabelecida(finalizada): quando foi realizada(resolve) ou recusada (reject)
      - Pendente é o status inicial
      - nós decidimos se ela vai ser Realizada(resolve) ou Recusada(reject)
*/

let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 10 // 0 cai no else 
}

const velocityAfter2Seconds = (velocity, acceleration) => {
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      if(acceleration > 0 ) {
        velocity += acceleration * 2
        console.log(`Nova velocidade: ${velocity}`)
        resolve(velocity)
      } else {
        console.log("Aceleração invalida")
        reject("Não possui aceleração")
      }
    }, 2000)
  })
}
velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)
console.log("Execução de Promises")
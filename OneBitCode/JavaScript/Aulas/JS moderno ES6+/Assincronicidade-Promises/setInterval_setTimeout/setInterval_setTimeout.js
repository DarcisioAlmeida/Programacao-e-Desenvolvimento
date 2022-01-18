/*
  // setInterval e setTimeout
    - são funções de alta ordem (recebem um outra função como parametro)
    - Executam a função depois de um tempo decorrido
    - A setTimeout executa apenas uma vez
    - A setInterval exacuta em varios intervalos de tempo definidos
*/
  /*
    setTimeout(() => {
      console.log('Executando após 2 segundos')
    }, 2000)

    setInterval(() => {
      console.log('Executando a cada 3 segundos')
    }, 3000)
  */
    
  let timeoutId = setTimeout(() => {
    console.log('Executando após 2 segundos')
  }, 2000)
  //clearTimeout(timeoutId)

  let seconds = 0
  let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando a cada ${seconds} segundos`)
    if(seconds >= 15) clearInterval(intervalId)
  }, 3000)
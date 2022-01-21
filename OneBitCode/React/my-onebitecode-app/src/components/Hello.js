import React from 'react' // a versão 17 não mais necesita deste import para todas páginas
/* Componentes para declarar React
  1. Função tradicional
  2. Com uso de Arrow Function
  3. Com classe - menos recomendado 
*/

// uso de função tradicional //
function HelloWorld () {
  return (
  <h1>Hello World, Welcome!</h1>
  )
}
export default HelloWorld

/* 
  // uso de ArrowFunction 
  const HelloWorld2 = () => {
    return (
    <h3>Usando uma ArrowFunction!</h3>
    )
  }
  export default HelloWorld2
*/ 

/* 
  // uso de Classes - menos recomendando pelo React 
  class HelloWorld extends React.component {
    render() {
      return (
        <h3>Usando uma ArrowFunction!</h3>
      )
    }
  }
  export default HelloWorld2
*/ 
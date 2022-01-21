/* Exercicio 1 
  Criando um Componente Lorem Ipsum
    - Na pasta src crie um pasta chamada components
    - Na pasta components crie um arquivo chamado LoremIpsum que deve ter um <p> com alguma frase
    - Importe esse componente para App.js
    - Exiba ele abaixo do componente Hello.js
*/

import React from 'react' // a versão 17 não mais necesita deste import para todas páginas o React já identifica //
import Hello from '../../Hello'

const LoremIpsum = () => {
  return (
    <>
    <Hello/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laborum voluptas molestiae sed delectus maiores, esse unde ipsum, corporis quo dolorem vitae, ab sequi ea magni temporibus beatae voluptates fugiat.</p>
    </>
    
  )
}
export default LoremIpsum
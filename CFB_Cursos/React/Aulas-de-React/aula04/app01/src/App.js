import React from 'react'
//é a linha de importação da biblioteca react para poder trabalha do arquivp

import IMG1 from "./componentes/imgs/img1.png"//de onde a imgagem tá vindo

import IMG2 from './componentes/imgs/img2.png'
//(img1)nome do componente do import
export default//faz a exportação do conteúdo retornado//
function App(){
  // a função por boas práticas tem que ter o mesmo nome do arquivo(App)
  //para programar todas as funções ,constantes e variáveis dos componentes de 'App'
  // A programação javascript vai ser feita deste espaço:entre function e return
  
  const canal = ()=>{
    return('CFBCURSOS - const' )
  }
  function curso() {
    return(' Curso de REACT  - const')
  }
   const nome1 ='retorna'
  return(//essa função tem que retornar algo
    <>
      <header>

        <p>{`Canal: ${canal()} - retornando uma arrow function`}</p>
          <br/>
      
        <p>{`Canal: ${curso()} - retornando uma function`}</p>

        <p>{`${nome1} - restornando uma constatnte `}</p>

      </header>

      <section>
        <img src={IMG1} width='200' alt=''/>
        <img src = {IMG2}  widith = '200' alt='' ></img>
        <img src='/img/img3.jpg' width='200' alt=''></img>
      </section>
    </>
    //A img3 aponta diretamente para a pasta pq está do mesmo local, da pasta public
    // a img1 e img2 está fora da pasta public(foram carregadas)
  )
    //ou pode ser assim:
   /* function App(){
      const canal = 'CFBCURSOS - const '
      const curso = 'Curso de REACT  - const'
      return(
        <section>
          <p> {`Canal + ${canal}`}</p>
        </section>
      )
    }*/


  //só se pode carregar somente um único componente por vez
  //pode se usar somentes as tags blocos
}

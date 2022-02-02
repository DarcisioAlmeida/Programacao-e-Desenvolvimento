import React, {useState, useEffect} from 'react'
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina_2'

export default function App(){
  const[pagina, setPagina] = useState(1)

  useEffect (()=> {
      const url = window.location.href
      const res = url.split('?') // virou um array http://localhost:3000 ? 1
      setPagina(res[1])
    })

  const LinksPaginas = (page) => {
    if(page == 1) {
      window.open('http://localhost:3000 ? 1', '_self') //array http://localhost:3000 [0] ? 1 [1]
    } else {
      window.open('http://localhost:3000 ? 2', '_self') //array http://localhost:3000 [0] ? 2 [1]
    }
  }

  const retornaPagina = ()=> {
    if(pagina == 1){
      return <Pagina1/>
    } else if (pagina == 2){
      return <Pagina2/>
    } else {
      return (
        <div>
          <button onClick=''> Pagina1 </button>
          <button onClick=''> Pagina2 </button>
        </div>
      )
    }
  }

  return(
    <>
      {retornaPagina()}
    </>
  )
}
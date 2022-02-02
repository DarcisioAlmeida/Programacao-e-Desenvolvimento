import React, {useState} from 'react'
import Globais from './components/Globais'
import Info from './components/Info'

export default function App(){
  const [resumo, setResumo] = useState(Globais.resumo)
  const gravarResumo = ()=> { 
    Globais.resumo = resumo 
  }
  const verResumo = ()=> {
    alert(Globais.resumo)
  }

  return(
    <>
      <Info/>
      <p>{"Canal : " + Globais.canal}</p>
      <p>{"Curso : " + Globais.curso}</p>
      <p>{"Ano : " + Globais.ano}</p>
      <hr/>

      <input 
        type='text' 
        value={resumo} 
        onChange-={(e)=>setResumo(e.target.value)}>
      </input>

      <button onClick={()=>gravarResumo()}> Gravar Resumo </button>
      <button onClick={()=>verResumo()}> Ver Resumo </button>
    </>
  )
}
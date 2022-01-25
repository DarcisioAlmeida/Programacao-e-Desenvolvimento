import React, {useState} from  'react'
import Numero from './componentes/Numero'
import './App.css'

export default function App(){
  const[num,setNum] = useState(15)
  const[nome, setNome]=useState('Darcisio Almeida')
  /*let n1 =35//não se usa váriavel, pois não está associado ao valor do componente
  const n100=()=>{//não mudo o valor, pois é um estado,não esta associado a propriedade do componente,ou seja quando muda o valor o componente não muda ou não renderiza.
    n1=100
    console.log(n1)
  }*/
  return(
    <>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
      <p>{nome} setNome{setNome}</p>
    </>
  )
}
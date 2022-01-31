import React ,{useState} from 'react'
import Carro from './components/Carro'

export default  function App(){
  const [carro,setCarro] = useState(true)
  const mostarocultarcarro= ()=>{
    setCarro(!carro)
  }
  return(
    <>
    <h1>Componentes de classes</h1>
    {carro ? <Carro/>:''}
    <button onClick={()=>mostarocultarcarro()}>
      ocultar
    </button>

 
    </>
  )
}
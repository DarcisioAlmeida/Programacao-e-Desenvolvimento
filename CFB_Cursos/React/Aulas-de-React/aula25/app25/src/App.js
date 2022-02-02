import React ,{useState} from 'react'
import Carro from './components/Carro'

export default  function App(){
  const [carro, setCarro] = useState(true)
  const mostarOcultarCarro= ()=>{
    setCarro(!carro)
  }
  return(
    <>
      <h1>Componentes de classes</h1>
      {carro ? <Carro/>:''}
      <button onClick={()=>mostarOcultarCarro()}>
        Ocultar {/* chamou o componentWillUnmount*/ }
      </button>
    </>
  )
}
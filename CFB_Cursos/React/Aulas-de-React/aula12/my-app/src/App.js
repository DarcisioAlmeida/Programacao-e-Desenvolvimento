import React,{useState} from 'react'

export default function App(){
  const [cor, setCOR] = useState(1)

  const vermelho = {color: 'f00'}
  const verde = {color:'0f0'}
  const azul = {color:'#00f'}

  const retCOR= (cor)=> {
    if (cor === 1){
      return vermelho
    }else if (cor === 2){
      return verde
    }else {
      return azul
    }
  }

  const mudaCOR=()=>{
    setCOR(cor +1)
    if(cor > 2){
      setCOR(1)
    }
  }

  //setInterval(mudaCor, 2000) - altera a cor automaticamente

  return(
    <>
      <h1 style={retCOR(cor)}> Alteração de cores </h1>
      <button onClick={()=>mudaCOR()}> Muda cor </button>
    </>
  )
}
/*
  // Exemplo 1 //
    export default function App {
      const[log, setLOG] = useState(false)
      
      const msglogin=()=>{
        return 'Usuário Logado'
      } 
      const msgLOGOFF=()=>{
        return 'Favor logar'
      }

      const cumprimento = ()=> {
        const hora = new Date().getHours()
          if (hora>=0 && hora<=12){
            return <p>Bom dia!</p>
          } else if (hora>12 && hora<=18){
            return <p>Boa tarde!</p>
          }else{
            return <p>Boa noite!</p>
          }
      }
      return(
        <>
          <h1>Aula de Renderização Condicional</h1>
          {cumprimento()}
          <p>{log ? msglogin() : msgLOGOFF()}</p>
          <button onClick={()=> setLOG(!log)}>
            {log ? 'LOGOFF' : 'LOGIN'}
          </button>
        </>
      )
    }
*/

import React , {useState} from 'react'

/* 
  localStorage.setItem("nome","Darcisio Almeida") //cria uma chave
  localStorage.setItem("nome","Lorena") //troca o valor de uma chave uma chave se nao existir ele cria
  localStorage.getItem('nome') //recupera uma chave
  localStorage.removeItem('nome') //remove uma chave
*/

export default function App(){
  const[nome, setNome]= useState()

  const armazenar=(chave, valor)=>{
    localStorage.setItem(chave, valor)
  }
  const consultar =(chave)=>{
    alert(localStorage.getItem(chave))
  }
  const apagar=(chave)=>{
    localStorage.removeItem(chave)
  }

  return(
    <>
      <label>Digite um nome</label><br></br>
        <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}> </input>
      <br/>
      <button onClick={()=>armazenar('ls_nome',nome)}> Gravar Nome </button>
      <button onClick={()=>consultar('ls_nome')}> Consultar Nome </button>
      <button onClick={()=>apagar('ls_nome')}> Remover Nome </button>
    </>
  )
}
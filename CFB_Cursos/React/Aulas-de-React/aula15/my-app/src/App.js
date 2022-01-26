import React , {useState} from 'react'

export default function App(){

  const [formulario, setFormulario] =useState({"nome": "", "idade":"","cidade":""})

  const handFormChange =(e)=>{
    if(e.target.getAttribute('name') ==='fnome'){
      setFormulario({"nome":e.target.value, "idade":formulario.idade, "cidade":formulario.cidade})
    }else if (e.target.getAttribute('name') === 'fidade'){
      setFormulario({"nome":formulario.nome, "idade":e.target.value, "cidade":formulario.cidade})
    }else if (e.target.getAttribute('name') === 'fcidade'){
      setFormulario({"nome":formulario.nome, "idade":formulario.idade, "cidade":e.target.value})
    }
  }
  return(
    <>
      <label>Nome</label>
        <input type='text' name='fnome' value={formulario.nome} onChange={(e)=>handFormChange(e)}/><br/>
      <label>idade</label>
        <input type='text' name='fidade' value={formulario.idade}  onChange={(e)=>handFormChange(e)}/><br/>
      <label>cidade</label>
        <input type='text' name='fcidade' value={formulario.cidade}  onChange={(e)=>handFormChange(e)}/><br/>

      <p>Nome digitado: {formulario.nome}</p>
      <p>idade digitada: {formulario.idade}</p>
      <p>cidade digitada: {formulario.cidade}</p>
    </>
  )
}
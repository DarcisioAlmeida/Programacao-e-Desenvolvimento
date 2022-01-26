import React , {useState} from 'react'

export default function App(){
  const [nome, setNome] = useState('Digite seu nome aqui') 

  const handleChangeNome =(e)=>{
    setNome(e.target.value)
  }

  const [carro, setCarro] = useState('HRV')

  return (
    <>
      <label>Digite o seu nome</label>
      <input type='text' name='fnome' value={nome}
        onChange={(e)=>handleChangeNome(e)}>
      </input>
      <p>Nome digitado : {nome}</p>
      <label>selecione um carro</label>
      <select value={carro} onChange ={(e)=>setCarro(e.target.value)}>
        <option value='Jetta'>Jetta</option>
        <option value='HRV'>HRV</option>
        <option value='Corolla'>Corolla</option>
        <option value='Jipe'>Jipe</option>
        <option value='Honda Civic'>Honda Civic</option>
        <option value='Golf'>Golf</option>
      </select>
      <p>Carro selecionado : {carro}</p>
    </>
  )
}  
/*
  // Exemplo 1
  fucntion App() {
    const[nome, setNome] = useState('')
    return (
      <>
        <label>Digite o seu nome</label>
        <input 
          type='text' 
          name='fnome' 
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
        />
        <p>Nome digitado : {nome}</p>
      </>
    )
  }
  
*/

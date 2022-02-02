import React, {useState} from 'react'

const carros = [
  {categoria: "Esporte", preco:"110000", modelo: "Golf GTI"},
  {categoria: "Esporte", preco:"135000", modelo: "Camaro"},
  {categoria: "SUV", preco:"85000", modelo: "HRV"},
  {categoria: "SUV", preco:"80000", modelo: "T-Cross"},
  {categoria: "Utilitario", preco:"150000", modelo: "Hilux"},
  {categoria: "Utilitario", preco:"120000", modelo: "Ranger"},
  {categoria: "Popular", preco:"75000", modelo: "Onix"},
  {categoria: "Popular", preco:"67000", modelo: "Argo"},
  {categoria: "Sedan", preco:"85000", modelo: "Voyage"},
  {categoria: "Sedan", preco:"82000", modelo: "Siena"},
]

const linhas = (cat)=> {
  const li = []
  carros.forEach(
    (carro) =>{
      if(carro.categoria.toUpperCase() == cat.toUpperCase || cat.toUpperCase() == '') {
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const TabelaCarros = (cat) => {
  return (
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const pesquisaCategoria = (cat, scat) =>{
  return (
    <div>
      <label htmlFor="">Digite uma Categoria</label>
      <input 
        type="text" 
        value={cat}
        onChange={(e)=> scat(e.target.value)}
      />
    </div>
  )
}
export default function App(){
  const [categoria, setCategoria] = useState('')
  return(
    <>
      {pesquisaCategoria(categoria, setCategoria)}
      {TabelaCarros(categoria)}
    </>
  )
}
import React from 'react'

export default function App(){
  //const modelosCarros =['hrv', 'Gol', 'Fusca', 'Chevete', 'Jipe']//podemos usar array e JSON

  const modelosCarros = [
    {CATEGORIA: 'Esporte', preço:'60000', modelo:'GOF GTI'},
    {CATEGORIA: 'Esporte', preço:'120000', modelo:'Camaro'},
    {CATEGORIA: 'SUN', preço:'800000', modelo:'HRV'},
    {CATEGORIA: 'SUN', preço:'830000', modelo:'HONDA CIVIC'},
    {CATEGORIA: 'UTILIARIO', preço:'50000', modelo:'Chevet'},
    {CATEGORIA: 'Utilitario', preço:'40000', modelo:'Gol'},
    {CATEGORIA: 'Utilitaio', preço:'20000', modelo:'Fusca'}
  ]
 
  const listacarros = modelosCarros.map(
    (car, ind)=>
    <li key={ind}>{ind}  - {car.modelo}  -  R$ {car.preço}  -  {car.CATEGORIA}</li>
  )

  return(
    <>
      <h1> Listas de Carros</h1>
      <ul>{listacarros}</ul>
    </>
  )
}
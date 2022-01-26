import React from 'react'
import Caixa from './components/Caixa'
import Aula from './components/Aula'

export default function App(){
  return (
    <>
      <Caixa site="https://pt-br.reactjs.org/">
        <Aula/>
        <h1>Colocando conteúdo do componente Caixa</h1>
        <h2>Olhe como é fácil</h2>
      </Caixa>
    </>
  )
}
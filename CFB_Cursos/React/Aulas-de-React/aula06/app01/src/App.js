import React from 'react'
// é a linha de importação da biblioteca react para poder trabalha do arquivos
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Teste01 from './componentes/Teste01'

export default function App(){

  return(
    <>
      <Header/>
      <Corpo/>
      <Teste01/>
    </>
  )
}
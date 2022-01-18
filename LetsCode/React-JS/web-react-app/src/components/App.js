// Uso de Classes Simples React - Componentes estaticos//
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <>
        <p>Meu primeiro Paragrafo Web React</p>
        <p>Meu segundo Paragrafo Web React</p>
        
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
      </>
    )
  }
}

export default App;

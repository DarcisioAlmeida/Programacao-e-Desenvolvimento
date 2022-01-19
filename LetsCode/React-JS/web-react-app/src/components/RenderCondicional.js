// Uso de Renderização Condicional//
import React from 'react'

class RenderCondicional extends React.Component {
  constructor(props) {
    super(props)
    this.state = {nome: undefined, txtNome: ''}
  }
  
  changeName = (event) => {
    this.setState({txtNome: event.target.value})
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome})
  }
  
  render() {
    const renderForm = () => {
        return (
          <>
            Nome:  
            <input 
              type="text" 
              value={this.state.nome}
              onChange={this.changeName}
            />
            <button onClick={this.persistName}>Salvar</button>
          </>
        )
      }
      
    const renderTxt = () => {
      return (
        <>
          <p>Olá {this.state.nome}</p>
        </>
      )
    }
      
    return !this.state.nome ? renderForm() : renderTxt()
  }
}

export default RenderCondicional;
// Uso de ciclos de Vida//
import React from 'react'

class CiclosVida extends React.Component {
  constructor(props) {
    super(props)
    this.state = {nome: undefined, txtNome: ''}
  }
  
  changeName = (event) => {
    this.setState({txtNome: event.target.value})
  }

  // controi elemento após carregado e salva getItem no cache
  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome')
    if(nome) this.setState({nome})
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome})
    sessionStorage.setItem('nome', this.state.txtNome) // salva informação kokis do navegador
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

export default CiclosVida;
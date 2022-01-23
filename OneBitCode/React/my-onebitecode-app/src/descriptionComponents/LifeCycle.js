/*
  * O que é Lifecycle - Ciclo de vida
    - cada component React tem um ciclo de vida
    - voce pode monitorar ou  manipular durante 3 fases:
      1. Mounting - quando elemento é colocado no DOM - componentDidMount
      2. Updating - quando um componente é atualizado - 
                  - ocorre sempre que há uma mundança no estado ou na propriedade do componente
      3. Unmounting - quando um componente é removido do Dom

*/
/* Criando um Life Cycle - ciclo de vida - usando APi  */
  import Planet from "./planet"
  import React from "react"
  
  /* Este exemplo esta simulando uma API originada da pasta Public/API usando o arquivo planets.json */
async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json') // acessando arquivo Api
  let data = await response.json()
  return data
}
// uso de this por ser componente de class
class Planets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      planets: []
     }
  }
  /* função para aguardar resultado da busca na API */
  componentDidMount() {
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }
  /* funçao para remover planeta*/
  removeLast = () => { 
    let new_planets = [...this.state.planets]
      new_planets.pop()
      this.setState(state => ({
        planets: new_planets
      }))
  }

  /* funçao para duplicar(adicionar) um planeta*/
  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length -1]
    this.setState(state => ({
      planets: [...this.state.planets, last_planet]
    }))
  }

  render() {
    return (
      <>
        <h3>Planets List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate Last Planet</button>
        <hr />
        {this.state.planets.map(() =>
          <Planet 
            name={Planet.name} 
            description={Planet.description}
            img_url= {Planet.img_url}
            link= {Planet.link}
          />
        )}
      </>
    )
  }
}
export default Planets
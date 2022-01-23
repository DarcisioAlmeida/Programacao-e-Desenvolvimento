/* States 
  * O que são estados?
    - é um objeto javascript que guarda os dados de um componete e determina seu comportamento
    - Quando um estado é atualizado o component é re-renderizado
    
  * Diferença entre Props e States?
    - Props - são passadas por outros componentes - Pai passa para o filho - vem de fora
    - State - pertence a cada componente - são internos

  * Diferença de Component de classe vc component funcional 
    - Classe uso de this e Construtor
    - Funcional não usa this e construtor

  * Component de Classe- usa this.
      - Declarar um estado em um component de classe
        construtor(props){
          super(props)
          this.state= {
            count:0
          }
        }
      - manipular um component de classe
        incrementCount(){
          this.setState((state) => {
            return {count:state.count + 1}
          })
        }  
    
  * Component Funcional - não usa this.
      - Declarar um estado de um component funcional  
        import React, {useState} from 'react'
        - const[count, setCount] = useState(0)
      
      - manipular um component funcional 
        setCount(count + 1)
*/

/* Criando uma Classe com Estado */

  import Planet from "./planet"
  import React from "react"

  /* Planets */
// uso de this
class Planets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      planets: [
        {
          name: "Mercurio",
          description: "Mercúrio é um metal líquido à temperatura ambiente, conhecido desde os tempos da Grécia Antiga.Também é conhecido como hidrargírio,[1] hidrargiro,[1] azougue[2] e prata-viva, entre outras denominações.",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg",
          text: "Um texto do Planeta Mercurio",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio"
        },
        {
          name: "Venus",
          description:"Vénus é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra",
          img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROJvvc_gBXgwyxLW0z_Fl6X0FEgqvcK4IzSq3bShHDDVqGdgJyfbgFzw9W8ElFZy5RtY&usqp=CAU",
          text:"Um texto do planeta Venus"
        },
        {
          name: "Plutao",
          description:"Plutão é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra",
          img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROJvvc_gBXgwyxLW0z_Fl6X0FEgqvcK4IzSq3bShHDDVqGdgJyfbgFzw9W8ElFZy5RtY&usqp=CAU",
        }
      ]
     }
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
            id={Planet.id} 
            name={Planet.name} 
            description={Planet.description}
            img_url= {Planet.img_url}
            link= {Planet.link}
            //key={index}
          />
        )}
      </>
    )
  }
}
export default Planets
/* 
  Usando State e Lifecycle 
    1. Transforme o component Planet em uma classe 
    2. Depois no mesmo component crie uam state para armazenar os satelites do planeta
    3. Crie um metodo para baixar os satelites da "API " URL = http://localhost:3000/api/{id_da_lua}
    4. Chame esse método quando o component for montado
    5. Com resultado preencha o stae de luas do componet 
    6. Exiba os satelites do planeta abaixo da imagem dele
  */
    import React from "react"
    import GrayImage from "../../shared/gray_image"
    import DescriptionWithLink from "../../Exercicios/Exercicio_2/DescriptionWithLink"
    //import States from '../../../descriptionComponents/States'
    

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`) //busca informação na API mars.json
  let data = await response.json() // transforma em json
  return data
}

class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: []
    }
  }

  // roda o componente quando for exibido
  componentDidMount() {
    getSatellites(this.props.id).then(data => {
      this.setState(state => ({
        satellites: data['satellites']
      }))
    })
  }

  render(){
    let title;
    if(this.props.title_with_underline){
      title = <h4><u>{this.props.name}</u></h4>
    } else {
      title = <h4>{this.props.name}</h4>
    }
    return (
      <div>
        {title} 
        <p>{this.props.description}</p>
        <button onClick={this.props.clickOnPlanet}>ParamentroEvento</button>
        <GrayImage 
          img_url={this.props.img_url}
          gray={this.props.gray}
        />
        <DescriptionWithLink text={this.props.text} link={this.props.link}/>
        <h4>Satélites:</h4>
        <ul>
          {this.state.satellites.map((satellite, index) =>
            <li key={index}>{satellite.name}</li>
          )}
        </ul>
        
      </div>
    )
  }
  
}

export default Planet
import GrayImage from "../../shared/gray_image"
import DescriptionWithLink from "../../Exercicios/exercicio_2/DescriptionWithLink"
import FormControlado from "../../Exercicios/exercicio_5/FormControlado"
import React, {useState} from 'react'


// Usando Props // Usando renderização condicional title // 
const Planet = (props) =>{
  // Renderizando multiplos componentes uso map 
    const namesSatellites= ["Estrelar", "Puller", "Atos", "Andromeda", "Fenix" ]
    const satellites = namesSatellites.map((i) => 
      <li>Satélite-{i}</li>
    )

    const [satellites2, setSatellites2] = useState([])

  // adicionando Form
    const addSatellite = (new_satellite) => {
      setSatellites2([...satellites, new_satellite])
    }


  let title;
  if(props.title_with_underline){
    title = <h4><u>{props.name}</u></h4>
  } else {
    title = <h4>{props.name}</h4>
  }
  return (
    <div>
      {title} 
      <p>{props.description}</p>
      <button onClick={props.clickOnPlanet}>ParamentroEvento</button>
      <GrayImage 
        img_url={props.img_url}
        gray={props.gray}
      />
      <DescriptionWithLink text={props.text} link={props.link}/>
      <h4>Satélites:</h4>
      <ul>{satellites}</ul>
      <hr />
      <h3>Form Satelite</h3>
      <FormControlado addSatellite={addSatellite}/>
      <hr />
    </div>
  )
  }
  export default Planet
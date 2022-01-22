import GrayImage from "../../shared/gray_image"
import DescriptionWithLink from "../../Exercicios/Exercicio_2/DescriptionWithLink"


// Usando Props // Usando renderização condicional title // 
const Planet = (props) =>{
  // Renderizando multiplos componentes uso map 
    const namesSatellites = ["Estrelar", "Puller", "Atos", "Andromeda", "Fenix" ]
    const satellites = namesSatellites.map((n) => 
      <li>Satélite {n}</li>
    )

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
    </div>
  )
  }
  export default Planet
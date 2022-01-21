import GrayImage from "../../shared/gray_image"
import DescriptionWithLink from "../../Exercicios/Exercicio_2/DescriptionWithLink"


// Usando Props //
const Planet = (props) =>{
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <button onClick={props.clickOnPlanet}>ParamentroEvento</button>
      <GrayImage img_url={props.img_url}/>
      <DescriptionWithLink text={props.text} link={props.link}/>
    </div>
  )
  }
  export default Planet
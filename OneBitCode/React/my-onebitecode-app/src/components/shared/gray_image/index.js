
import './style.css'

// Usando Renderização condicional com Ternario
const GrayImage = (props) => {
return (
  <div>
    <img className= {props.gray ? "gray-image" : "color-image"} src={props.img_url} alt="" />
  </div>
)
}
export default GrayImage
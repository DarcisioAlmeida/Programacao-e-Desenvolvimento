/* 
  Refatore Usando Hooks 
    1. Transforme o component Planet em um component funcional 
    2. Use o hook de state para gerenciar os estados ao inves do construtor e setState
    3. Use o hook de lifecycle (useEffect) para chamar a API ao invés do componentDidMount
*/
    import React, {useState, useEffect} from "react"
    import GrayImage from "../../shared/gray_image"
    import DescriptionWithLink from "../../Exercicios/Exercicio_2/DescriptionWithLink"
    
async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`) //busca informação na API mars.json
  let data = await response.json() // transforma em json
  return data
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]) // pode colocar um parametro com ou sem estado inicial

  useEffect(()=> {
    getSatellites(props.id).then(data => {
      setSatellites(data['satellites'])
    })
  },) // [] carrega somente quando inicializado

     
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
        <ul>
          {satellites.map((satellite, index) =>
            <li key={index}>{satellite.name}</li>
          )}
        </ul>
      </div>
    )
}
  
export default Planet
import React, {useState, useEffect} from "react"
    import GrayImage from "../../shared/gray_image"
    import DescriptionWithLink from "../../Exercicios/Exercicio_2/DescriptionWithLink"
   
    
const NewPlanet = (props) => {
       
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
        <GrayImage 
          img_url={props.img_url}
          gray={props.gray}
        />
        <DescriptionWithLink text={props.text} link={props.link}/>
        
      </div>
    )
}
  
export default NewPlanet
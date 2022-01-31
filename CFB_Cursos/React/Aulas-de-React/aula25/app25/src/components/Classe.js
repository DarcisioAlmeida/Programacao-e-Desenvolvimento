import React from "react"


class Classe extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <h1>Primeiro Componentes de classes</h1>

            <p>Exemplo de frase:{this.props.site}</p>
            </div>
        
        )
    }
}
export default Classe
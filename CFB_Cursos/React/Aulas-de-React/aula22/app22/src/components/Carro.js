import React from 'react'

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo ="HONDA CIVIC"
        this.state = {
            ligado:false,
            velATual : 50,
        }
    }

    ligarDesligar (){
        this.setState({ligado:!this.state.ligado})
    }
    
    render(){
        return(
            <div>
                <h1>MEU Carro</h1>
                <p>Modelo : {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "SIM" : "NÃO"}</p>
                <p>Velocidade atual : {this.state.velATual}</p>
                <button onClick={()=> this.ligarDesligar()}>
                   {this.state.ligado ? "Desligar carro" : "Ligar carro"} 
                </button>
            </div>
        )
    }
}
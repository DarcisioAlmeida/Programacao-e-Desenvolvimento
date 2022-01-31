import React from 'react'

export default class Carro  extends React.Component{
    constructor(props){
        super(props)
        this.modelo ="HONDA CIVIC"
        this.state = {
            ligado:false,
            veloATual : 50,
        }
        this.ld = this.ligarDesligar.bind(this) // metodo bind pegando a função ligarDesligar
    }

    ligarDesligar (){
        this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        )
    }
    
    acerelar (){
        this.setState(
            (state, props)=>(
            {veloATual: state.veloATual + props.fator}
            )
        )
    }
    render(){
        return(
            <div>
                <h1>MEU Carro</h1>
                <p>Modelo : {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "SIM" : "NÃO"}</p>
                <p>Velocidade atual : {this.state.veloATual}</p>
                <button onClick={this.ld}>
                    {this.state.ligado ? "Desligar carro" : "Ligar carro"} 
                </button>

                <button onClick={()=>this.acerelar()}>
                    Acerelar
                </button>
            </div>
        )
    }
}
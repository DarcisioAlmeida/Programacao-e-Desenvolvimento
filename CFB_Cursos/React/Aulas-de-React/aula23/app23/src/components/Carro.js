import React from 'react'

export default class Carro  extends React.Component{
    constructor(props){
        super(props)
        this.modelo ="HONDA CIVIC"
        this.state = {
            ligado:false,
            velAtual : 50,
        }
    }

    ligarDesligar (){
    //this.setState({ligado:!this.state.ligado})
    //ATUALIZAÇÃO COM componente de função Tradicional
        /*
            this.setState(
                function(state){
                    return{
                        ligado:!state.ligado
                    }
                }
            )    
        */

    // Atualização com componente Arrow function
        this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        )
    }

    acerelar (){
        this.setState(
            (state, props)=>(
            {velAtual: state.veloATual + props.fator}
            )
        )
    }
    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo : {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "SIM" : "NÃO"}</p>
                <p>Velocidade Atual : {this.state.velAtual}</p>
                <button onClick={this.ligarDesligar}>
                   {this.state.ligado ? "Desligar carro" : "Ligar carro"} 
                </button>

                <button onClick={()=>this.acerelar()}>
                    Acerelar
                </button>
            </div>
        )
    }
}
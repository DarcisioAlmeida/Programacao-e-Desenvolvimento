import React from 'react'

export default class Carro  extends React.Component{
    constructor(props){
        super(props)
        this.modelo ="HONDA CIVIC"
        this.state = {
            ligado:false,
            velAtual : 50,
        }
        this.ld=this.ligarDesligar.bind(this)
    }
    
    ligarDesligar (){
    this.setState({ligado:!this.state.ligado})
    }
    // components
        componentDidMount(){
            console.log('carro criado')
        }
        componentDidUpdate(){
            console.log('carro atualiado')
        }
        componentWillMount(){
            console.log('carro removido')
        }
        
        acerelar (){
            this.setState(
                (state, props)=>(
                {velAtual: state.velAtual + props.fator}
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
                <button onClick={this.ld}>
                   {this.state.ligado ? "Desligar carro" : "ligar carro"} 
                </button>
                <button onClick={()=>this.acerelar()}>
                    Acerelar
                </button>
            </div>
        )
    }
}
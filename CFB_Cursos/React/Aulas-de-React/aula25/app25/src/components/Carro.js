import React from 'react'

export default class Carro  extends React.Component{
    constructor(props){
        super(props)
        this.modelo ="HONDA CIVIC"
        this.state = {
            ligado:false,
            veloATual : 50,
        }
    }






    ligaDESLIGAR (){
this.setState({ligado:!this.state.ligado})
    }



    componentDidMount(){
        console.log('carro criado')
    }
    componentDidUpdate(){
        console.log('carro atualiado')
    }
    componentWillMount(){
        console.log('carro removido')
    }
        
    render(){
        return(
            <div>
                <h1>MEU Carro</h1>
                <p>Modelo : {this.modelo}</p>
            <p>Ligado: {this.state.ligado?"SIM":"NÃO"}</p>
                <p>Velocidade atual : {this.state.veloATual}</p>
                <button onClick={()=>this.ligaDESLIGAR()}>
                   {this.state.ligado?"Desligar carro":"ligar carro"} 
                </button>


            </div>
        )
    }
}
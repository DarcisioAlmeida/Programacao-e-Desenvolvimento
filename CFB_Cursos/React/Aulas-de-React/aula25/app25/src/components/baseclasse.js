import React from 'react'

export default class BaseClasse extends React.Component{
    constructor(props){
        //para permitir o uso de props
        super(props)
        //instruções do construtor

        this.state ={
            aula:"25",
            curso:"React",
            ativo: true,
            nome:this.props.nomealuno
        }
        this.status = this.props.status
        //bindagem
        let ad = ativarDesativar.bind (this)
    }
    //função para ,manipular state
    ativardesativar(){
        this.setState(
            state=>({
                ativo=!state.ativo
            })
        )
    }

    componentDidMount(){
        console.log('componenete criado')
    }
    componentDidUpdate(){
        console.log('componenete atualizado')
    }
    componentWillUnmount(){
        console.log('componenete removido')
    }

    render(){
        return(
            <>
                <h1>Componentes de classes</h1>

                <button onClick={()=>this.ativardesativar}>ativar/ativarDesativar</button>
            </>
             
        )
    }


}
import React from 'react'

export default class BaseClasse extends React.Component {
    constructor(props){
        //para permitir o uso de props
        super(props)
        //instruções do construtor

        //state
        this.state ={
            canal:"CPF Cursos",
            curso:"React",
            ativo: true,
            nome:this.props.nomeAluno
        }
        this.status = this.props.status
        let ad = ativarDesativar.bind (this) //bindagem
    }
    // função para, manipular state
    ativarDesativar(){
        this.setState(
            state=>({
                ativo=!state.ativo
            })
        )
    }

    componentDidMount(){
        console.log('O componente foi criado')
    }
    componentDidUpdate(){
        console.log('O componenete foi atualizado')
    }
    componentWillUnmount(){
        console.log('O componenete foi removido')
    }

    render(){
        return(
            <>
                <h1>Componentes de classes</h1>
                {/*chamada da função com bind*/}
                <button onClick={this.ad}> Ativar | Desativar </button>
                {/*chamada da função sem bind*/}
                <button onClick={()=> this.ativarDesativar}>Ativar | Desativar</button>
            </>
        )
    }
}
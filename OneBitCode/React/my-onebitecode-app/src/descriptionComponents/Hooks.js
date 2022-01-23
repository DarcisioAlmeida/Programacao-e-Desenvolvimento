/*
  * O que são Hooks 
    - é uma forma de usarmos useState e lifecycle e compartilharmos logica em componentes funcionais
    - Eles foram inseridos a partir da versão 16.8 do React:
    - useEffect é o Hook responsável pelo lifecycle(ciclo de vida)
    - useEffect substitui as declarações de componentDidMount e componetDidUpdate
    // no exemplo: count é declaração de estado | setCount é quem altera estado
    // -------------------------------------------------------//
      * Exemplo de component com Hook de state *
        import React, {useState}  from 'react'
          function Example(){
            const [count, setCount] = useState(0) 
            return (
              <div>
                <p>You clicked {count} times </p>
                <button onClick= {()=> setCount(count + 1)}> Click me </button>
              </div>
            )
          }
    // -----------------------------------------------------------//
      * Exemplo de component com Hook associado a lifecycle *    
        import React, {useState, useEffect}  from 'react'
          function Example(){
            const [count, setCount] = useState(0)
            // Similar to componentDidMount and componetDidUpdate:
            useEffect(()=>{
              //update the document title using the browser API
              document.title = `You clicled ${count} times`
            })
            return (
              <div>
                <p>You clicked {count} times </p>
                <button onClick= {()=> setCount(count + 1)}> Click me </button>
              </div>
            )
          }
    // -------------------------------------------------------------------------//        
*/    

import Planet from "./planet"
import React, {useState, useEffect} from "react"

/* Este exemplo esta simulando uma API originada da pasta Public/API usando o arquivo planets.json */
async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json') // acessando arquivo Api
  let data = await response.json()
  return data
}

 /* componentDidMount() {
  getPlanets().then(data => {
    this.setState(state => ({
      planets: data['planets']
    }))
  })
}
// declaração mais limpa compare com componentDidMount()
  useEffect(()=> {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  },[]) 1. array vazio renderiza so na montagem | 2. array [planets] atualiza toda vez que planets sofrer alteração 3. sem array renderiza sempre! 
*/
/* componente Funcional Hooks Use Effect */ // substitui o componentDidMount declarado na classe
const Planets= () => {
  const [planets, setPlanets] = useState() // pode colocar um parametro com ou sem estado inicial
  
  // substitui o componentDidMount declarado no exemplo de component de classe
  // declaração mais limpa compare com componentDidMount()
  useEffect(()=> {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  })

  /* funçao para remover planeta*/ // para componente funcional dentro do component devemos usar const 
  const removeLast = () => { 
    let new_planets = [...planets]
      new_planets.pop()
      setPlanets(new_planets)
  }

  /* funçao para duplicar(adicionar) um planeta*/ // para componente funcional dentro do component devemos usar const
  const duplicateLastPlanet = () => { 
    let last_planet = planets[planets.length -1]
      setPlanets([...planets, last_planet])
  }

  return (
      <>
        <h3>Planets List</h3>
        <button onClick={removeLast}>Remove Last</button>
        <button onClick={duplicateLastPlanet}>Duplicate Last Planet</button>
        <hr />
        {planets.map(() =>
          <Planet 
            name={Planet.name} 
            description={Planet.description}
            img_url= {Planet.img_url}
            link= {Planet.link}
          />
        )}
      </>
    )
}

export default Planets
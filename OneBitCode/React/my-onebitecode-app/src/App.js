import React from 'react';
import '../src/App.css'
// import HelloWorld from './components/Hello';
// import LoremIpsum from './components/Exercicios/exercicio_1/LoremIpsum';
import Planets from './components/planets/planets/index';
import Planet from './components/planets/planet';


function App() {
  return (
    <div className="App">
      <Planets/>
      <hr />
      <Planet 
        name="Plutão"
        description="Plutão, formalmente designado 134340 Plutão (símbolo: ⯓),[12] é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta"
        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        
      />
    </div>
  );
}

export default App;

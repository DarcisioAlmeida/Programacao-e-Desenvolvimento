import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//para recarregar todo o aplicativo e vai mostrar somente a parte que houve alteração


function tick(){
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
}
setInterval(tick,1000)//está chamando a função tick a cada 1 segundo
tick()//chamando a função tick

//Só está recarregando a função relógio.
// SÍ CARREGOU A PÁgina onde houve alteração.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

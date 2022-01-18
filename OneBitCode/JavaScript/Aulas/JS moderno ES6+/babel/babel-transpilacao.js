/* 
  Transpilação com Babel
    - Transpilar é converter o código que está em uma linguagem para uma outra
    - Babel é responsável por etá conversão - converte numa versão do ECMA para verões anteriores
    - Babel é desenvolvido em Javascript
    - Utilizado para permitir o compatibilidade com os navegadores que ainda não suportam determinadas versão
*/

/* 
  npm init - y // mantem opções padrões do npm
  npm install @babel/core @babel/cli @babel/preset-env --save-dev // instala os 3 pacotes do babel em versão desenvolvimento
    babel core- base do abel
    babel cli - permite usar linha de comando
    babel preset - pacote para converter qualquer versão do ES6 para ES5
*/

// suposição que arquivo tenhamos um arquivo com nome de testing-es8.js
  function testingES8(text1, text2,){
    alert(`${text1}\n${text2}`)
  }
/*
  npx babel testing-es8.js 
  // converteria uma versão anterior - note virgula ao final text2 não compativel com versões anteriores 
  // nesta caso ele remove a virgula 
  // podemos também salvar em outro arquivo usando: -o (output, saída)
    npx babel testing-es8.js -o compiled-script.js
    npx babel testing-es8.js -o compiled-script.js --presets=@babel/preset-env // transpila para versão ES5
    npx babel src --out-dir dist --presets=@babel/preset-env // transpila todo um diretorio dentro do SRC para diretorio dist
*/
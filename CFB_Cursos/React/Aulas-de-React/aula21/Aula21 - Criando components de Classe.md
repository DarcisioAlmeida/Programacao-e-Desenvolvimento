Aula 21 - Criando Componentes de Classe em React

  -  vamos aprender sobre criação de componentes de classe. 
  - Até então só trabalhamos como componentes funcionais, e hoje vamos entender sobre componentes de classe.
  - Classe usa a palavra this 
  - Com novas atualizações de React - não se declara mais na classe um construtor vazio e nem com mesma palavra em super
    /*
      class A {
          constructor () {
          }
      }

      class B extends A {
          constructor (...args) {
            super(...args);
          }
      }
    */  

    - O ES2015 fornece um construtor de classe padrão se um não for especificado. Como tal, é desnecessário fornecer um construtor vazio ou um que simplesmente delegue em sua classe pai.
    - fonte - https://eslint.org/docs/rules/no-useless-constructor
    
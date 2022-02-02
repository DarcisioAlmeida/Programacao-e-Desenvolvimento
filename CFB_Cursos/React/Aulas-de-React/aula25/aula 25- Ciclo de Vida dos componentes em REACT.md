Aula 25- Ciclo de Vida dos componentes em REACT

  - Vamos aprender sobre o como é o ciclo de vida dos componentes em REACT. 
  - Sobre os métodos de ciclo de vida de componentes de classe.

Fluxo:
* Na montagem, quando uma instancia do componente está sendo criada no DOM
  1. constructor()
  2. static getDerivedStateFromProps()
  3. render()
  4. componentDidMount() // criação

* Na atualização do componente, por alterações cauusadas em props ou state, quando o componente esta sendo rendereizado
  1. static getDerivedStateFromProps()
  2. shouldComponentUpdate()
  3. render()
  4. getSnapshotBeforeUpdate // qdo atualizado

* Na desmontagem, quando o componente está sendo removido do DOM
  1. componentWillUnmount // removido

* Em tratamento de erros, quando exisitr algum erro em algum momento no componente.
  1. static getDerivedStateFromError()
  2. componentDidCatch
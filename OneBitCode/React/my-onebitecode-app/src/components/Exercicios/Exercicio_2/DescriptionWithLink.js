/* 
  Criando um Component com Props 
   - Crie um novo componente compartilhado chamado DescriptionWithLink onde é possivel passar duas propriedades, a primeira um texto e a segunda un link.
   - Nesse componente exiba o texto como um paragrafo e abaixo um link
   - No componente Planet insira o componente criado como props e passe um pequeno texto descrevendo o Planeta e um link para o Wikipedia sobre ele.
*/

// Usando condicionais  IF e Else
  const DescriptionWithLink = (props) => {
    if(props.link) {
      return (
        <>
          <p>{props.text}</p>
          <a href={props.link}>{props.link}</a>
        </>
      )
    } else {
        return (
        <>
          <p><u>{props.text}</u></p>
          <ul><li>teste</li></ul>
        </>
      )
    }
    
  }
  export default DescriptionWithLink
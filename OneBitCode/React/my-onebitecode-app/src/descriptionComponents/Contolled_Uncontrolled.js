/* 
  # Controlled e Uncontrolled #

  O que é um Uncontrolled component?
    - Em geral é um component que tem seus dados gerenciados pelo proprio DOM (como em um input normal) sem relação com state do component

  // Exemplo de Uncontrolled component //
    const Form = () => {
      return (
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </div>
      )
    }
    export default Form
  ------------------------------------------------------------------------------------------------
  ------------------------------------------------------------------------------------------------
  O que é um Controlled component?
    - Components controlados estão associados aos estados do component, ou seja eles exibem informações baseadas no state e quando alterados alteram também o proprio state  
    - Controla o Form via React
  
    // Exemplo de Controlled component //
    const Form = () => {
      const [name, setName] = useState('')
      const handleChange = (e) => setName(e.currentTarget.value)
      
      return (
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={handleChange} />
        </div>
      )
    }
    export default Form
*/
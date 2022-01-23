/*
  Criando um novo Form controlado
    - Crie um novo form para incluir satelites no component Planet
*/
import React, {useState} from 'react'
const initialState ={
  name:''
}

const Form = (props) => {
  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = (e) => setFields({
    ...fields, 
    [e.currentTarget.name]: e.currentTarget.value
  }) 

  const handleSubmit = event => {
    props.addSatellite(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange} />
        </div>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}
export default Form
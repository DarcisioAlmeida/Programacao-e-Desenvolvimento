/* Criando Form Controlado */
import React, {useState} from 'react'
/* Itens alterados de form controlado de apenas um campo para controlado de varios campos
  // const [name, setName] = useState('') // apenas um campo
  // const handleChange = (e) => setName(e.target.value) // apenas um campo
  // <input id="name" type="text" value={name} onChange={handleChange} /> // apenas um campo
  // <input id="name" type="text" name="name" value={name} onChange={handleChange} /> // apenas um campo
  
  const handleSubmit = () => {
      props.addPlanet({name: name})
      Event.preventDefault()
    }
*/
const initialState = {
  name: '',
  description: ''
  // link: '',
  //img_url: ''
}

// Formulário //
const Form = (props) => {
  // fields multimos campos de impult //transforme em objeto
  const [fields, setFields] = useState(initialState)
    
  const handleChange = (e) => setFields({
    ...fields, 
    [e.currentTarget.name]: e.currentTarget.value
  }) 

  const handleSubmit = () => {
    props.addPlanet(fields)
    Event.preventDefault()
    setFields(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleChange} />
          <label htmlFor="description"> Description: </label>
          <input id="description" type="text" name="description" value={fields.description} onChange={handleChange} />
          <br/>
          <input type="submit" />
        </div>
       </form>
    </>
  )
}
export default Form
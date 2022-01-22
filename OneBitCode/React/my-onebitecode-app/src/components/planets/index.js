import Planet from "./planet"
// import GrayImage from "../shared/gray_image"

/* Eventos */
  //leitura sobre eventos no React: https://reactjs.org/docs/handling-events.html

  // evento de click
    const showMessage = () => {
      alert('Meu Evento')
    }

  //evento como parametro - chamado em Planet
    const clickOnPlanet = () => {
      console.log('Clicou no meu planeta!')
    }

/* Planets */
const Planets = () =>{
return (
  <div>
    <h3>Planets List</h3>
    <button onClick={showMessage}>Show Message</button>
    
    <Planet 
      title_with_underline= {true} 
      name= "Mercurio"
      description="Mercúrio é um metal líquido à temperatura ambiente, conhecido desde os tempos da Grécia Antiga.Também é conhecido como hidrargírio,[1] hidrargiro,[1] azougue[2] e prata-viva, entre outras denominações."
      img_url= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg"
      text= "Um texto do Planeta Mercurio"
      link= "https://pt.wikipedia.org/wiki/Merc%C3%BArio"
      clickOnPlanet= {clickOnPlanet}
      gray={true} // true imagem preto e branco / false ou sem gray imagem colorida
    />
    
    <Planet 
      name= "Venus"
      description="Vénus é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra"
      img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROJvvc_gBXgwyxLW0z_Fl6X0FEgqvcK4IzSq3bShHDDVqGdgJyfbgFzw9W8ElFZy5RtY&usqp=CAU"
      text="Um texto do planeta Venus"
    />

  </div>
)
}
export default Planets
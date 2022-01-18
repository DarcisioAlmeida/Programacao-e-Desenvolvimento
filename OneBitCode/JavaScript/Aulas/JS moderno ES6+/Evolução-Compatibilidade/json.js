/* JSON - Conceitos
  - Json - significa Javascript object Notation
  - Um forma de representação de dados em formato de texto
  - Ele é derivado da forma como os objetos são organizados
  - Diferentes sistemas precisam se comunicar - é necessário um padrão para que possa mandar dados de um para outro - exemplo JS x Rubi
  - Json é um formato bem compacto e altamente adotado 
  - Pode ser um texto salvo num arquivo, geralmente com formato .json
  - Pode ser mesmo uma string 
*/
/*
  Exemplo de representação - Mapeamento, propriedade, valor - formato em string
  {
    "name": "Terra",
    "physicalCharacteristics": {
      "surfaceArea": 510072000,
      "equatorialDiameter": 12756.2
    },
    "colors": ["Azul", "Branco", "Marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
  }
*/
  // Exemplo em código 

  let planet_jason = {
    "name": "Terra",
    "physicalCharacteristics": {
      "surfaceArea": 510072000,
      "equatorialDiameter": 12756.2
    },
    "colors": ["Azul", "Branco", "Marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
  }
  console.log(planet_jason)

  let planet = JSON.parse(planet_jason) // converte json de formato texto para objeto
  console.log(planet)
  
### Modulos CommonJS

- Queremos armazenar informações sobre o sistema solar
- Para isso, temos uma lista d eplanetas e a distancia dele ao sol em Unidade Astronomica
- Para cada planeta nesta lista, queremos imprimnir a distancia em AU (unidade Astronomica) e também a distancia em quilometros.
- Crie um modulo para uma classe Planeta
- Crie um modulo para armazenar as informações de calculo e a operação de conversão de distância
  * 1 AU = 149.587.870km
  * Neste modulo, crie uma constatnte com o valor de 1 AU em quilometros
  * Crie uma função de conversão para esta operação
  * Exporte um objeto com estes dois dados.

- Importe estes dois modulos num arquivo index.js
- Crie uma lista com os planetas do sistema solar como objetos da classe criada
- Cada planeta tem a seguinte distnaica em AU par ao Sol
  * Mercurio: 0,39
  * Venus: 0,72
  * Terra: 1
  * Marte: 1,52
  * Jupiter: 5,2
  * Saturno: 9,52
  * Urano: 19,1
  * Netuno: 30

- Percorra esta lista e imprima no console a distancia em AU em Quilometros de cada planeta
  * Utilize o metodo toFixed para imprimir a conversão com 2 casa decimais
# Margin
  Descrição
    Margin, é o espaço (margem) entre os elementos

  Podemos dividir o margin em 4 valores:
    /* margin-top | margin-right | margin-bottom | margin-left */
  values: <length> | <percentage> | auto

  Geralmente usamos uma forma abreviada (shorthand) para escrever o margin. Esse formato segue o sentido horário iniciando pelo top, seguindo para right, bottom e left.

  margin: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
  margin: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
  margin: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
  margin: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */

  O margin é aplicado em elementos com display block
  Cuidado com o margin collapsing que é quando o top se junta ao bottom um ao lado do outro é somado os valores de margin para cada elemento

# Padding
  Descrição
  O padding é o preenchimento interno da caixa.

  A propriedade padding pode ser escrita como nos formatos apresentados abaixo:
  padding-top | padding-right | padding-bottom | padding-left
  Geralmente usamos uma forma abreviada (shorthand) para escrever o padding. Esse formato segue o sentido horário iniciando pelo top, seguindo para right, bottom e left.

  padding: 12px 16px 10px 4px; /* TOP = 12px | RIGHT = 16px | BOTTOM = 10px | LEFT = 4px */
  padding: 12px 16px 0; /* TOP = 12px | RIGHT = 16px | BOTTOM = 0px | LEFT = 16px */
  padding: 8px 16px; /* TOP = 8px | RIGHT = 16px | BOTTOM = 8px | LEFT = 16px */
  padding: 8px; /* TOP = 8px | RIGHT = 8px | BOTTOM = 8px | LEFT = 8px */

  O padding pode ter valores (values) de comprimento (px, em, rem) ou de porcentagem (%)

  O padding poderá causar diferença na largura de um elemento
  obs.: Na aula sobre box-xizing aprendemos como resolver essa diferença na largura do elemento

  https://app.rocketseat.com.br/node/uma-caixa-dentro-da-outra/lesson/box-sizing
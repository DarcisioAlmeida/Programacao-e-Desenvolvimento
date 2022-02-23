## Hexadecimal
  /*<hex-color> values 0-9 e A-F*/
  color: #090; /* RED, GREEN, BLUE */
  color: #009900;
  color: #090a;
  color:#009900aa;

## RGB
  Descrição
  RGB → Red, Green e Blue
  O alpha representa a transparência da cor
  /*<rgb()> values */
  color: rgb(34, 12, 64, 0.6) /* 0-255 */
  color: rgba(34, 12, 64, 0.6)

## HSL
  Descrição
  HSL → Hue - Saturation - Lightness

  color: hsl(180, 100%, 50%, 60%)
  color: hsla(180, 100%, 50%, 60%)

## Global values
  /* Global values */
  color: inheritr; /* Herda a cor do elemento anterior */
  color: initial; /* Volta a sua cor inicial */
  color: unset; /* Pega a cor do contexto */

Referência
[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value]

## Background-image-repeat
  Descrição
  Para adicionar uma imagem como background podemos usar a propriedade background-image
  Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat
  /* Values */
  background-repeat: repeat-x;
  background-repeat: repeat-y;
  background-repeat: repeat;
  background-repeat: space;
  background-repeat: round;
  background-repeat: no-repeat;

  /* Podedmos usar 2 valores: horizontal | vertical */
  background-repeat: repeat space;
  background-repeat: repeat repeat;
  background-repeat: round space;
  background-repeat: no-repeat round;

## Background-position
  Descrição
  Com a propriedade background-position podemos mudar a posição da imagem do background.

  /* Pricipais valores */
  background-position: top;
  background-position: bottom;
  background-position: left;
  background-position: right;
  background-position: center;

## Background-size
  Descrição
  Para mudar o tamanho da imagem do background usamos a propriedade background-size.

  /* Values */
  background-size: cover;
  background-size: contain;

  /* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
  background-size: 40% auto;
  background-size: 2em 25%;
  background-size: auto 8px;
  background-size: auto auto;

## Background-origin-clip
  Descrição
  A propriedade background-origin é quem define o ponto de origem de uma imagem específica.
  
  /* Principais valores */
  background-origin: border-box;
  background-origin: padding-box;
  background-origin: content-box;

  O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.
  
  /* Principais valores */
  background-clip: border-box;
  background-clip: padding-box;
  background-clip: content-box;
  background-clip: text;

## Background-attachment
  Descrição
  A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

  /* Principais valores */
  background-attachment: scroll;
  background-attachment: fixed;
  background-attachment: local;

## Gradient
  Descrição
  linear-gradient() é a função usada para criar gradient linear com o CSS.
  background: linear-gradient(45deg, red, yellow)
  
  radial-gradient() é a função usada para criar gradient circular.
  background: radial-gradient(green, red, yellow)
  background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))
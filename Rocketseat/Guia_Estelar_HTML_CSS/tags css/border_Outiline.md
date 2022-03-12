## Border-outline
  Descrição
  São as bordas da caixa

  Documentação do MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/border

  value: <border-style> | <border-width> | <border-color>

  style: solid | dotted | dashed | double | groove | ridge | inset | outset
  width: <length> px, em, rem
  color: <color> 

  div {
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;
  }

    outline: yellow 4px solid;
    E o outline?
    O outline é muito semelhante ao border, mas difere em 4 sentidos:
    Não modifica o tamanho da caixa, pois não é parte do Box Model - coloca borda por fora
    Poderá ser diferente de retangular
    Não permite ajuste individuais
    Mais usado pelo user agent para acessibilidade
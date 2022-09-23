$('p').append(' Isso é um H3') // adiciona
$('h2').append($('.introducao h1')) // adiciona clona o que estava escrito em h1 para h2 e remove todos h1
$('h2').appendTo($('introducao h1')) // adiciona todos h2 no lugar de introducao h1
$('p').html('Teste') // set e troca tudo que tem no p pela palavra teste
var conteudoH2 = $('h2').html(); // pega apenas o primeiro contexto h2 do html

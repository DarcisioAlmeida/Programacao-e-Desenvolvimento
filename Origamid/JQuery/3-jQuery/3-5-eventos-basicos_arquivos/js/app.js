$('a').click(function(){
  //$('a').text('Clicou')
  $(this).text('Clicou')
})
/*
$('a').on('click', function(){
  $('.btn').text('Abriu')
})
// click
$('a').on('click', function(e){
  e.preventDefault() //previne evento padrao
  console.log(e)
  $(this).text('Abriu')
})
*/
//mouse enter
$('a').on('mouseenter', function(e){
  e.preventDefault() //previne evento padrao
  console.log(e)
  $(this).text('Abriu')
})

$('a').on('mouseleave', function(e){
  e.preventDefault() //previne evento padrao
  console.log(e)
  $(this).text('Saiu')
})


var psize = $('p').css('font-size')
console.log(psize)

$('.modal').css({
  'background-color': 'red',
  'width': '200px'
})

$(document).scroll(function(){
  var documentTop = $(this).scrollTop()
  $('.modal').css('height', documentTop * 10)
})
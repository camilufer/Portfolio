
$('#inicio').on('mouseenter', '.btn-nav', function() {
  $('.btn-nav').removeClass('for-hover animated infinite flash');
  $(this).addClass('for-hover animated infinite flash');
})

$('#inicio').on('click', '.btn-nav', function() {
  $('nav').show()
})







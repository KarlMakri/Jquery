$('body').append('<div id="cible" class="boite">I Will Change My Color</div>');

let active;

$('.bouton').click(function(){
  $('#cible').removeClass(active);
  active = $(this).data('color');
  $('#cible').addClass(active);
})
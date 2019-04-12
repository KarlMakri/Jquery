$('body').append('<div id="cible" class="boite">Je vais changer</div>');
let active;

$('.bouton').click(function(){
    $('#cible').removeClass(active);
    active = $(this).data('couleur');
    $('#cible').addClass(active);
})
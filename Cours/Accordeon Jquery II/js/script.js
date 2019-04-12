$('body').append('<div id="cible" class="boite">Je vais Changer</div>');

$('.rouge').click(function(){
    $('#cible').addClass("rouge");
    //$('#cible').atr("rouge");
})

let color = [];

$('.boite').click(function(){

    
    $("#cilble").attr('style',  'background-color:black');
    console.log('I change color  !');
})

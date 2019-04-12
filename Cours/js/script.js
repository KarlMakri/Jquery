//$('body') // Selectionne la balise body
//$('#test') // Selectionne l'id test
//$('.rouge') // Selectionne les elements ayant la classe rouge

//$('body').append ('Salut tout le Monde');
//$('body').prepend('ça se met avant <br/>');

/*$('#envoi').click(function(){
    //alert('On Se reveille');
    //$('#test').hide();
    $('#test').toggle();
})

$('#titre1').data('titre'); // Recupére la valeur de data-titre
$('#titre2').attr("data-titre", "nouvelle valeur") // Modifier*/

$('.contenu').hide();
let active; // Sert a enregistrer le numéro de contenu actif

$('.titre').click(function(){

    // Test si c'est le contenu actif sur lequel on a reclique
    if($(this).data('titre') != active){
        $('#contenu'+active).hide('slow');
    }
    //$('.contenu').hide('slow');
    let cible = '#contenu'+$(this).data('titre');
    active = $(this).data('titre');
    console.log('ça clique');
    $(cible).toggle('slow');
    //$(cible).slideToggle('slow');

})
$('.contenu').hide();
let active; //sert a enregistrer le numero de contenu actif

$('.titre').click(function(){
//Teste si c est le contenu actif sur lequel on a reclique
if($(this).data('titre') != active ){
$('#contenu'+active).hide('slow');
active = $(this).data('titre');
}
let cible = '#contenu'+ active;
$(cible).toggle('slow');
})
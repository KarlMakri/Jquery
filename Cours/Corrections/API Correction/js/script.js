fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be')
.then((resp)=>resp.json())
.then(function (data) {
let resultat = Object.values(data.results);
$('body').append('<table id="list"><tr><td>Titre</td><td>Annee</td><td>Actions</td></tr>');
for(i = 0; i < resultat.length; i++){
//Methode function 
$('#list').append('<tr id="ligne'+i+'"><td>'+resultat[i].title+'</td><td>'+resultat[i].release_date+'</td><td><button onclick="masque('+i+')">Masquer</button></td></tr>');
//Methode evenement
// $('#list').append('<tr id="ligne'+i+'"><td>'+resultat[i].title+'</td><td>'+resultat[i].release_date+'</td><td><button data-index="'+i+'">Masquer</button></td></tr>');
}
$('body').append('</table>');
})
.catch(function(error){
console.log(error)
})

//NE fonctionne pas car les elements sont charges apres
//$("button").click(function()

//Methode evenment
$('body').on('click','button',function(){
index = $(this).data('index');
$('#ligne'+index).hide('slow');
})

//Methode function
function masque(index){
$('#ligne'+index).hide('slow');
}

$('body').append('<div id="cible" class="boite">Je vais changer</div>');
let active;

$('button').click(function(){
    $('#ligne').removeClass(active);
    active = $(this).data('couleur');
    $('#ligne').addClass(active);
})
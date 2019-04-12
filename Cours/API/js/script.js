//Methode Jquery
$.ajax({
    url: 'http://data.streetfoodapp.com/1.1/',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
    console.log(data.open);
    }
    });
    
    //methode Native
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be')
    .then((resp)=>resp.json())
    .then(function (data) {
    let resultat = Object.values(data.resultats);
    $('body').append('<table><tr><td>Titre</td><td>Annee</td><td>Actions</td></tr>')
    for(i = 0 ; i < resultat.length; i++){
        $('body').append('<tr><td>'+resultat[i].title+'</td><td>'+resultat[i].release_date+'</td><td><button id="disabled">Masquer</button></td>')
    }
    //console.log(resultat) 
    $('body').append('</table>')
    })
    .catch(function(error){
    console.log(error)
    })

    $('button').click(function(){
        index = $(this).data('index');
        $("#bt2").removeAttr("disabled");
    })
window.onload = addElement;
/*La méthode window.onload est déclenchée lorsque la page est entièrement chargée sur le navigateur*/

function addElement () {
    
    /*crée le tableau stagiaire contenant les nom des stagiaires*/
    var tab_stagiaire = ['Mélissa CADY','Térence DEVEQUI','Ugo FOK-YIN','Pascal INDICE','Idriss KOURBANHOUSSEN','Lucas LEVENEUR','Cédric MAILLOT','Fredy MCHINDRA','Cedrid MOUNIAMA','Quentin PAVOT','Quentin PAYET','Saia RALANDSON','Alexandre ROBERT','Nicolas THAO-THION','Guillaume VACARME','Laurent VERGOZ'];
    
    var list_stag = "";
    
    var num_stag =0;

    /*boucle qui permet de parcourir le tableau "tab_stagiaire"*/
    for (var nomb_stag = 0; num_stag < tab_stagiaire.length; nomb_stag++) {

        var nom_stagiaire = tab_stagiaire[nomb_stag];

        num_stag = nomb_stag + 1;

        /*
        += "concaténation"
        ajoute la nouvelle ligne avec ce qui est deja présent dans la variabe
        correspond a : list_stag = lisr_stag + 'nouveau contenue'
        */
        list_stag += '<article class="col-md-3">';
        list_stag += '<div class="card">';
        list_stag += '<a href="page-stagiaire/hello' + num_stag + '.html" class="stretched-link"><img src="img/img-dia' + num_stag + '.png" class="card-img-top img-taille" alt="Photo de ' + nom_stagiaire +'"></a>';
        list_stag += '<div class="card-body"></div>';
        list_stag += '<h5 class="card-title">' + nom_stagiaire + '</h5>';
        list_stag += '</div>';
        list_stag += '</div>';
        list_stag += '</article>';
      

    }
    
    /*La propriété Element.innerHTML récupere ce qui est situé dans "list-stagiaire" est le remplace par "list_stag"*/
    document.getElementById('list-stagiaire').innerHTML = list_stag;
   

  }


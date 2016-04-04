var http_request = false;
function getHTTPRequest() {
  http_request = false;
  if (window.XMLHttpRequest) { // Mozilla, Safari,...
     http_request = new XMLHttpRequest();
     if (http_request.overrideMimeType) { // Si ça existe c'est qu'on n'est pas sous IE
     	// set type accordingly to anticipated content type
        //http_request.overrideMimeType('text/xml');
        http_request.overrideMimeType('text/html');
     }
  } else if (window.ActiveXObject) { // IE
     try {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (e) {
        try {
           http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
     }
  }
  if (!http_request) {
     alert('Votre Navigateur est incompatible avec la technologie AJAX');
  }
  return http_request;
}

function send(){
  http_request = getHTTPRequest();
  parameters =
	  "toto=" +
	  encodeURI(document.myForm.saisie.value);
  http_request.onreadystatechange = alertContents;
  http_request.open('POST', "ServletAjax", true);
  http_request.setRequestHeader(
		  "Content-type", "application/x-www-form-urlencoded");
  http_request.setRequestHeader("Content-length", parameters.length);
  http_request.setRequestHeader("Connection", "close");
  http_request.send(parameters);
  return false;
}

function ajouterPersonnage(){
    http_request = getHTTPRequest();
    parameters =
        "nom=" +encodeURI(document.disneyForm.nom.value)
    +"&espece="+encodeURI(document.disneyForm.espece.value)
    +"&anime="+encodeURI(document.disneyForm.anime.value)
    +"&naissance="+encodeURI(document.disneyForm.naissance.value)
    ;
    http_request.onreadystatechange = alertAjouterPersonnage;
    http_request.open('POST', "ServletAjoutPersonnage", true);
    http_request.setRequestHeader(
        "Content-type", "application/x-www-form-urlencoded");
    http_request.setRequestHeader("Content-length", parameters.length);
    http_request.setRequestHeader("Connection", "close");
    http_request.send(parameters);
    return false;
}


function rechercherPersonnage(){
    http_request = getHTTPRequest();
    parameters =
        "anime="+encodeURI(document.disneyForm.anime.value);
    http_request.onreadystatechange = alertRechercherPersonnage;
    http_request.open('POST', "ServletRecherchePersonnage", true);
    http_request.setRequestHeader(
        "Content-type", "application/x-www-form-urlencoded");
    http_request.setRequestHeader("Content-length", parameters.length);
    http_request.setRequestHeader("Connection", "close");
    http_request.send(parameters);
    return false;
}

function alertContents() { // Ecouter
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            result = http_request.responseText;
            document.getElementById('raiponce')
                .innerHTML = result;
        } else {
            alert('Probleme survenu sur le serveur');
        }
    }
}

function alertAjouterPersonnage() { // Ecouter
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            result = http_request.responseText;
            document.getElementById('resultat')
                .innerHTML = result;
        } else {
            alert('Probleme survenu sur le serveur');
        }
    }
}
function alertRechercherPersonnage() { // Ecouter
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            result = http_request.responseText;
            document.getElementById('resultat')
                .innerHTML = result;
        } else {
            alert('Probleme survenu sur le serveur');
        }
    }
}
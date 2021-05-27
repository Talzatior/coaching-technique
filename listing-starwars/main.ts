//console.log('People 1')

fetch('https://swapi.dev/api/people/')
.then(reponse => reponse.json())
.then(resultat => {
    console.log(resultat);
});
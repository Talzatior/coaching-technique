import { PeopleService } from "./people.service.interface";

let unService: PeopleService;

// Définir le comment => quelle classe implémente cette interface

const peoples = unService.getAll();

peoples.forEach(item => console.log(item));

// fetch('https://swapi.dev/api/people/')
// .then(reponse => reponse.json())
// .then(resultat => {
//     console.log(resultat);
// });
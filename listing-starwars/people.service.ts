import { People } from "./models/people";
import { IPeopleService } from "./people.service.interface";

export class PeopleService implements IPeopleService {
    
    getAll(): People[] {
        // fetch('https://swapi.dev/api/people/')
// .then(reponse => reponse.json())
// .then(resultat => {
//     console.log(resultat);
// });
    }
    
}
import { PeopleService } from "./people.service";
import { IPeopleService } from "./people.service.interface";

let unService: IPeopleService = new PeopleService();

// Définir le comment => quelle classe implémente cette interface

const peoples = unService.getAll();
peoples.forEach(item => console.log(item));


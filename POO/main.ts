import { Animal } from './animal';
import { Gorille } from './gorille';
import { Chien } from './chien';

let gorille: Animal;

// gorille = new Gorille('King Kong', '456585');
// gorille.dormir();


const animaux: Animal[] = [
    new Gorille('King Kong', '456585', 'sur un lit de feuilles'), 
    new Chien('Medor', '123456', 'dans une niche')
];


animaux.forEach(item => { item.dormir() });

// const chien = new Animal('Medor', '123456');
// chien.dormir("dans une niche");

// const gorille = new Animal('Tok', '123457');
// gorille.dormir("sur des feuilles");
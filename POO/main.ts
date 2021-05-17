import { Animal } from './animal';
import { Gorille } from './gorille';
import { Chien } from './chien';
import { Oiseau } from './oiseau';
import { Autruche } from './autruche';
import { Perroquet } from './perroquet';
import { Aigle } from './aigle';

let gorille: Animal;

// gorille = new Gorille('King Kong', '456585');
// gorille.dormir();


const animaux: Animal[] = [
    new Gorille('King Kong', '456585', 'sur un lit de feuilles'), 
    new Chien('Medor', '123456', 'dans une niche')
];

const oiseaux: Oiseau[] = [
    new Autruche('Hortense', '1ab2c', 'debout', false),
    new Perroquet('Coco', '3615', 'percher sur une branche', true),
    new Aigle('Thorondor', 'Royal05', 'percher sur une branche', true)
]


animaux.forEach(item => { item.dormir() });
oiseaux.forEach(item => { item.voler() });

// const chien = new Animal('Medor', '123456');
// chien.dormir("dans une niche");

// const gorille = new Animal('Tok', '123457');
// gorille.dormir("sur des feuilles");
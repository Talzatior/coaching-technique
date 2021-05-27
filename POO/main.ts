import { Animal } from './animal';
import { Gorille } from './gorille';
import { Chien } from './chien';
import { Autruche } from './autruche';
import { Perroquet } from './perroquet';
import { Aigle } from './aigle';

let gorille: Animal;

// gorille = new Gorille('King Kong', '456585');
// gorille.dormir();


const lesAnimaux: Animal[] =[];

lesAnimaux.push(
    new Gorille('King Kong', '151515'),
    new Chien('Medor', '8888888'),
    new Perroquet('Coco', '656565'),
    new Aigle('Thorondor', '74123'),
    new Autruche('BipBip', '456132')
);

lesAnimaux.forEach(item => {
    item.dormir();
    item.seDeplacer();
});

// const chien = new Animal('Medor', '123456');
// chien.dormir("dans une niche");

// const gorille = new Animal('Tok', '123457');
// gorille.dormir("sur des feuilles");
import { Aigle } from './aigle';
import { Animal } from './animal';
import { ChauveSouris } from './chauve-souris';
import { Chien } from './chien';
import { Gorille } from './gorille';
import { Oiseau } from './oiseau';
import { Perroquet } from './perroquet';
import { Superman } from './superman';
import { Volant } from './volant';

let gorille: Animal;

//const chien = new Animal('Medor', '123456');
gorille = new Gorille('King Kong', '151515');
gorille.dormir();


gorille = new Chien('medor', '8869663');
gorille.dormir();

const lesAnimaux: Animal[] = [];

lesAnimaux.push(
    new Gorille('King Kong', '151515'),
    new Chien('Medor', '8869663'),
    new Perroquet('Coco', '65656'),
    new Aigle('Thorondor', '74123'),
    new ChauveSouris('Batman', '545454')
);



lesAnimaux.forEach(item => {
    item.dormir();
    item.seDeplacer();    

    // (<Volant> item)?.voler();
});


const lesVolants: Volant[] = [
    new Perroquet('chico', '5454'),
    new ChauveSouris('Batman', '7879'),
    new Superman()
];
lesVolants.forEach(item => item.voler());

// console.log(chien.toto);
// chien.type ='dd';

//chien.dormir();

// Ajouter un second animal => un gorille
// Et il dort, lui, sur des feuilles.
// Attention, le chien dort dans sa niche ;)

// Exécute ce code 
// > trouver le moyen d'exécuter le code actuel
// > soit avec node.js, soit avec deno, soit avec tsc

// Se filmer pour expliquer ce que tu as fait, soit pendant l'exercice, soit apres coup



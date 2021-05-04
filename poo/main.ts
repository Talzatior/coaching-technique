import { Animal } from './animal';
import { Chien } from './chien';
import { Gorille } from './gorille';

let gorille: Animal;

//const chien = new Animal('Medor', '123456');
gorille = new Gorille('King Kong', '151515');
gorille.dormir();

gorille = new Chien('medor', '8869663');
gorille.dormir();

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



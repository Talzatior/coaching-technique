import { Animal } from "./animal";

export abstract class Oiseau extends Animal {
    
    voler() {
        console.log('I believe I can fly !');
    }

    seDeplacer() {
        this.voler();
    }
}
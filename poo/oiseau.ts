import { Animal } from "./animal";
import { Volant } from "./volant";

export abstract class Oiseau extends Animal implements Volant {
    
    voler() {
        console.info('je vole avec mes ailes en plumes');
    }

    seDeplacer() {
        this.voler();
    }
}
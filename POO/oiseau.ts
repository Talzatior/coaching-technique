import { Animal } from './animal';

export abstract class Oiseau extends Animal {

    //#region Methods
    voler() {
        console.info('I believe I can fly !!');
    }

    seDeplacer() {
        this.voler();
    }
    //#endregion
}
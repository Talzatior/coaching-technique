import { Animal } from './animal';

export class Chien extends Animal {
    //#region  Public methods
    dormir() {
        console.info('j\'aboie dans une niche');
    }
    //#endregion
}
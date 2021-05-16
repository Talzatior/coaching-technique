import { Animal } from './animal';

export class Gorille extends Animal {
    //#region Public methods
    dormir() {
        super.dormir();
        // console.info('sur un lit de feuilles');
    }
    //#endregion
}
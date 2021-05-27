import { Animal } from './animal';

export class Gorille extends Animal {
    //#region Public methods
    seDeplacer() {
        console.log('Je fonce dans le tas !!');
    }

    protected getLocation(): string {
        return ('sur un lit de feuilles');
    }
    //#endregion
}
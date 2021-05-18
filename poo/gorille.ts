import { Animal } from "./animal";

export class Gorille extends Animal {
    //#region Public methods
    seDeplacer() {
        console.log('Il en faut peu ...');
    }
    //#endregion

    protected getLocation(): string {
        return 'sur un lit de feuille';
    }
}

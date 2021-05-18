import { Animal } from "./animal";

export class Gorille extends Animal {
    //#region Public methods
    protected getLocation(): string {
        return 'sur un lit de feuille';
    }
    //#endregion
}

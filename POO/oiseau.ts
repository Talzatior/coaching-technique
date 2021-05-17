import { Animal } from './animal';

export class Oiseau extends Animal {
    //#region Fields
    private _vole: boolean;
    animal: Animal;
    //#endregion

    //#region Constructors
    constructor(unPrenom: string, unMatricule: string, ouJeDors: string, vole: boolean){
        super(unPrenom, unMatricule, ouJeDors);
        this._vole = vole;
    }
    //#endregion

    //#region Method
    dormir() {
        super.dormir();
    }
    voler() {
        if(this._vole) {
            console.info('Je vole !')
        }
        else {
            console.info('Je ne vole pas !')
        }
    }
    //#endregion
}
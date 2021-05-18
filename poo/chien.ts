import { Animal } from './animal';

export class Chien extends Animal {
    //#region  Public methods
    seDeplacer() {
        console.log('Je cours sans réfléchir');
    }
    //#endregion
    
    protected getLocation(): string {
        return 'dans une niche';
    }
}
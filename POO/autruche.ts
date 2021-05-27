import { Oiseau } from './oiseau';

export class Autruche extends Oiseau {
    //#region Methods
    protected getLocation(): string {
        return 'debout sur le sol !'
    }

    voler() {
        console.info('Je ne vole pas, mais je cours vite !!');
    }
    //#endregion
}
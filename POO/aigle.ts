import { OiseauVolant } from './oiseauVolant';

export class Aigle extends OiseauVolant {
    //#region Methods
    voler() {
        console.info('Je tourne en rond pour traquer ma proie !!');
    }

    protected getLocation(): string {
        return 'sur une branche';
    }

    //#endregion
}
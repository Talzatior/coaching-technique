import { OiseauVolant} from './oiseauVolant';

export class Perroquet extends OiseauVolant {
    //#region Methods
    voler() {
        console.info('Je vole comme un pet !!');
    }

    protected getLocation(): string {
        return 'sur mon perchoir';
    }

    //#endregion
}
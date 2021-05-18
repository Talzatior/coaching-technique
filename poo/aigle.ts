import { Oiseau } from "./oiseau";

export class Aigle extends Oiseau {

    protected getLocation(): string {
        return 'sur une branche';
    }

    voler() {
        console.log('je vole comme un fou');
    }
}
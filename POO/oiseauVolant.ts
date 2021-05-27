import { Oiseau } from "./oiseau";

export abstract class OiseauVolant extends Oiseau {
    seDeplacer() {
        this.voler();
    }

    voler() {
        console.info('Je vole comme un fou !!');
    }
}
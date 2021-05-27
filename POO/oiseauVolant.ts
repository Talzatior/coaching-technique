import { Oiseau } from "./oiseau";

export abstract class OiseauVolant extends Oiseau {
    voler() {
        console.info('Je vole comme un fou !!');
    }
}
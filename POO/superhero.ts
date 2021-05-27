import { Oiseau } from './oiseau';

export class Superhero extends Oiseau {
    //#region 
    dormir(){
        super.dormir();
    }
    voler() {
        super.voler();
    }
    //#endregion
}
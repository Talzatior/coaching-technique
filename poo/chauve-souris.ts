import { Animal } from "./animal";
import { Volant } from "./volant";

export class ChauveSouris extends Animal implements Volant {
    voler() {
        console.info('je vole avec mes pattes modifiées');
    }

    seDeplacer() {
        this.voler();
    }

    protected getLocation(): string {
        throw new Error("Method not implemented.");
    }

}
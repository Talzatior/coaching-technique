import { Humain } from "./humain";
import { JeSuisVip } from "./je-suis-vip";

export class Videur {
    validerZoneVip(personnage: Object): boolean {
        const estVip = personnage as JeSuisVip;

        return (!! estVip);
    }

    lancerVideo(lesVips: JeSuisVip[]) {
        lesVips.forEach(item => item.payerAvecDeLor());
    }
}

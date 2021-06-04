import { Chat } from "./chat";
import { HumainBourre } from "./humain-bourre";
import { HumainRiche } from "./humain-riche";
import { Videur } from "./videur";

const videur = new Videur();
const evan = new HumainBourre();
const pierre = new HumainRiche();

let okVip = videur.validerZoneVip(evan);

if (okVip)
{
    // Let's go pour ... ;)
}

okVip = videur.validerZoneVip(pierre);

if (okVip)
{
    // Let's go pour ... ;)
}

okVip = videur.validerZoneVip(new Chat());

videur.lancerVideo([
    new Chat(),
    pierre
]);
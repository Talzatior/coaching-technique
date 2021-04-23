/*
    - Nombre de pattes
    - Une tête
    - Nom
    - Matricule

    + SeNourrir
    + SeDeplacer
    + Communiquer
    + SeReposer

    (Soigner)
*/

export class Animal {
    //#region Fields 
        private _prenom: string;
        private _matricule: string;
    //#endregion

    //#region 
        constructor(unPrenom: string, unMatricule: string) {
            this._prenom = unPrenom;
            this._matricule = unMatricule;
        }
    //#endregion

    //#region Public method
        dormir(lieu: string, position: string) {
            const endroitOuJeDors = lieu;
            const commentJeDors = position;
            console.info(this._prenom + ' dort ' + commentJeDors + ' ' + endroitOuJeDors + '.');
        }
    //#endregion
}
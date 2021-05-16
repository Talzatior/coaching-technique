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
        private _ouJeDors: string;
    //#endregion

    //#region Constructors
        constructor(unPrenom: string, unMatricule: string, ouJeDors: string) {
            this._prenom = unPrenom;
            this._matricule = unMatricule;
            this._ouJeDors = ouJeDors;
        }
    //#endregion

    //#region Public method
        dormir() {
            let message = 'Je dors ';
            console.info(message + this._ouJeDors);
        }
    //#endregion
}
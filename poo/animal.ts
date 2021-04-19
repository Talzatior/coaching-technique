/**
 * - Nombre de pattes
 * - Une tete
 * - Nom
 * - Matricule
 *
 * + Manger
 * + SeDeplacer
 * + Communiquer
 * + SeReposer
 * 
 * (Soigner)
 */

export class Animal {
    //#region Fields
    private _prenom: string;
    private _matricule: string;
    //#endregion

    //#region Constructors
    constructor(unPrenom: string, unMatricule: string) {
        this._prenom = unPrenom;
        this._matricule = unMatricule;
    }
    //#endregion

    //#region Public methods
    dormir() {
        console.info(this._prenom + ' je dors');
    }
    //#endregion
}
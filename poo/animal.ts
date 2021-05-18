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


export abstract class Animal {
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
        let message = 'je dors ' + this.getLocation();
        console.info(message);
    }

    abstract seDeplacer();
    //#endregion

    //#region Properties
    protected abstract getLocation(): string;
    //#endregion
}
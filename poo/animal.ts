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
    private _type: string;
    //#endregion

    //#region Constructors
    constructor(unPrenom: string, unMatricule: string, type: string) {
        this._prenom = unPrenom;
        this._matricule = unMatricule;
        this._type = type;
    }
    //#endregion

    //#region Public methods
    dormir() {
        let message = 'je dors';

        if (this._type == 'Chien') {
            message += ' dans une niche';
        }

        if (this._type == 'Gorille') {
            message += ' sur un lit de feuilles';
        }
        
        console.info(message);
    }
    //#endregion

    //#region Properties
    public get toto(): string {
        return this._type;
    }

    // public set type(value: string) {
    //     this._type = value;
    // }
    //#endregion
}
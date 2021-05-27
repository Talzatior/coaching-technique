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

    //#region Public method
        dormir() {
            let message = 'Je dors ' + this.getLocation();
            console.info(message);
        }

        abstract seDeplacer();
    //#endregion
    protected abstract getLocation(): string;
    //#region 
    
    //#endregion
}
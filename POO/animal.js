"use strict";
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
exports.__esModule = true;
var Animal = /** @class */ (function () {
    //#endregion
    //#region 
    function Animal(unPrenom, unMatricule) {
        this._prenom = unPrenom;
        this._matricule = unMatricule;
    }
    //#endregion
    //#region Public method
    Animal.prototype.dormir = function (lieu) {
        var endroitOuJeDors = lieu;
        console.info(this._prenom + ' dort ' + endroitOuJeDors + '.');
    };
    return Animal;
}());
exports.Animal = Animal;

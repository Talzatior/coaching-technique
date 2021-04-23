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
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    //#endregion
    //#region 
    function Animal(unPrenom, unMatricule) {
        this._prenom = unPrenom;
        this._matricule = unMatricule;
    }
    //#endregion
    //#region Public method
    Animal.prototype.dormir = function (lieu, position) {
        var endroitOuJeDors = lieu;
        var commentJeDors = position;
        console.info(this._prenom + ' dort ' + commentJeDors + ' ' + endroitOuJeDors + '.');
    };
    return Animal;
}());
exports.Animal = Animal;

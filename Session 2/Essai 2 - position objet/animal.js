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
var animal_dodo_1 = require("./animal-dodo");
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
        var dodo = new animal_dodo_1.AnimalDodo(lieu, position);
        console.info(this._prenom + ' dort ' + dodo.position + ' ' + dodo.lieu + '.');
    };
    return Animal;
}());
exports.Animal = Animal;

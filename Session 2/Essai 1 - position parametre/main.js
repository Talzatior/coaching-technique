"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
var chien = new animal_1.Animal('Medor', '123456');
chien.dormir("dans une niche", "Couché");
var gorille = new animal_1.Animal('Tok', '123457');
gorille.dormir("sur des feuilles", "couché");
var cheval = new animal_1.Animal('Joly Jumper', "1243");
cheval.dormir("dans le pré", "debout");

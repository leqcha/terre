// Créez un programme qui affiche le résultat d’une puissance.

// L’exposant ne pourra pas être négatif.

// Exemples d’utilisation :
// $> node exo.js 2 3
// 8

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

// pseudo code
// créer la fonction qui calcule la puissance
// verifier que les argu passés sont des nombres
//      qu'il n'y a que 2 argu
// que le 2ème nombre est positif
// enfin appeler la fonction

const { argv } = require("process");
const { boolean, number } = require("yargs");
let userInput = argv.slice(2); // on concatène le tableau en string pour le manipuler
console.log(userInput);
const oneArg = userInput != 2;
const isNumber = userInput()
// function 

if (oneArg){ // on vérifie qu'il n'y a qu'un seul argu passé
    console.log("Il faut entrer deux chiffres");
}
// else

// fonction utilisées

// partie 1 gestion d'erreur

// partie 2 parsing
// prendre les datas de l'user et stocker 

// partie 3 résolution

// partie 4 affichage







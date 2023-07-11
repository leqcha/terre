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
let userInput = argv.slice(2); // on concatène le tableau en string pour le manipuler
console.log(userInput);

function 

if (userInput.length != 2){ // on vérifie qu'il n'y a qu'un seul argu passé
    console.log("Il faut entrer deux chiffres");
}
else






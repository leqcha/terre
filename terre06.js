// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

// Exemples d’utilisation :
// $> node exo.js “Hello world!”
// !dlrow olleH

// $> node exo.js “lehciM”
// Michel

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

const { argv } = require("process");
let userString = argv.slice(2).join(); // on concatène le tableau en string pour le manipuler

let userStringReverse = "";

if (userString.length === 0) { // on vérifie qu'il y a un argu passé
    console.log("Vous n'avez pas entré d'argument(s)");
}

else {

    for (let i = userString.length - 1; i >= 0; i--) {
        userStringReverse += userString[i];
    }
    
    console.log(userStringReverse);

}

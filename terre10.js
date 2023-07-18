// Créez un programme qui affiche si un nombre est premier ou pas.

// Exemples d’utilisation :
// $> node exo.js 5
// Oui, 5 est un nombre premier.

// $> node exo.js 6
// Non, 6 n’est pas un nombre premier.

// Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

// Un nb premier est un entier naturel non null qui admet exactement 2 diviseurs : 1 et lui-même

const { argv } = require("process");
let userInput = argv.slice(2);

function primeNumber(number) {
    for (let i = 2; i < number; i++) {  // on initialise à 2 car tous les nombres sont divisibles par 1
        if (number % i === 0) { // le reste de la division est toujours nul lorsqu'un nb 1er est divisible 
            return result = console.log("Non, " + userInput + " n'est pas un nombre premier");
        }
    }
    return result = console.log("Oui, " + userInput + " est un nombre premier.");
}

if (userInput === null) {
    console.log("Veuillez entrez un nombre");
}

else if (isNaN(userInput)) { // cas différent d'un nombre
    console.log("Veuillez entrer un nombre");
}

else if (userInput <= 1) { // cas nombre négatif
    console.log("Veuillez entrer un nombre positif supérieur à 1");
}

else { //cas attendu
    primeNumber(userInput);
}



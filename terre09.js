// Créez un programme qui affiche la racine carrée d’un entier positif.

// Exemples d’utilisation :
// $> node exo.js 9
// 3

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

const { argv } = require("process");
let userInput = argv.slice(2);

let result = 0;
let i = 1;

function squareRoot(number) {
    while (i * i <= number) { //on passe les chiffres 1 par 1
        i++;
        if (i * i == number) { // jusqu'à tomber sur celui au carré qui donne l'entrée
            return result = i;
        }
        else if (i * i > number) // si on ne trouve pas le carré parfait, on renvoie un entier proche
            return result = i - 1;
    }
}

if (userInput === null) { // cas 0 argu
    console.log("Veuillez entrez un nombre");
}

else if (isNaN(userInput)) { // cas différent d'un nombre
    console.log("Veuillez entrer un nombre");
}

else if (userInput <= 0) { // cas nombre négatif
    console.log("Veuillez entrer un nombre positif");
}

else { //cas attendu
    console.log(squareRoot(userInput));
}

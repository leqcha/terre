// Créez un programme qui affiche le résultat d’une puissance.

// L’exposant ne pourra pas être négatif.

// Exemples d’utilisation :
// $> node exo.js 2 3
// 8

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

const { argv } = require("process");

let userInput = argv.slice(2);

function power(number1, number2) {
    let result = number1 ** number2;
    return result;
}

if (isNaN(Number(userInput[0])) || isNaN(Number(userInput[1]))){
    console.log("Il ne faut rentrer que des nombres!");
}

else if (Math.sign(userInput[1]) <= 0){
    console.log("le deuxième chiffre doit être positif!");
}

else if (userInput.length != 2){ // on vérifie qu'il n'y a qu'un seul argu passé
    console.log("Il ne faut entrer que deux chiffres!");
}

else{
    let result = power(userInput[0], userInput[1]);
    console.log(result);
}









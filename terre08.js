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
console.log(userInput[0]);
console.log(userInput[1]);


// fonction utilisées
function power(number1, number2) {
    return number1 *= number2;
}

// partie 1 gestion d'erreur
if (isNaN(Number(userInput[0])) || isNaN(Number(userInput[1]))){
    console.log("ce n'est pas un nombre");
}
else if (Math.sign(userInput[1]) <= 0){
    console.log("le deuxième chiffre doit être positif");
}
else if (userInput.length != 2){ // on vérifie qu'il n'y a qu'un seul argu passé
    console.log("Il faut entrer deux chiffres");
}
else{
    userInput.join();
    let resultat = power(userInput);
    console.log(resultat);
}









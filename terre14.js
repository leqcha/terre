// Créez un programme qui détermine si une liste d’entiers est triée ou pas.

// Exemples d’utilisation :
// $> ruby exo.rb 9 8 3
// Pas triée !

// $> ruby exo.rb 3 8 9 12
// Triée !

// $> ruby exo.rb “Salut”
// erreur.

function isNumberSorted(argsArray) {

    if (userInput === null || userInput.length < 2) { // on ne trie pas si 0 argu ou un seul chiffre
        console.log("Entrez plusieurs chiffres ou nombres");
        return;
    }

    for (let i = 0; i < userInput.length; i++){ // on gère si autre chose qy'un chiffre est entré
        if (isNaN(userInput[i])){
            return console.log("Il faut entrer uniquement des chiffres !");
        }
    }

    for (let i = 1; i < argsArray.length; i++) {
        if (argsArray[i] < argsArray[i - 1]) {
            return console.log("Pas triée!");
        }
    }
        return console.log("Triée!");
    }

    const { argv } = require("process");
    let userInput = argv.slice(2);

    isNumberSorted(userInput);
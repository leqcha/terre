// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

// Exemples d’utilisation :
// $> python exo.py 5 2
// résultat: 2
// reste: 1

// $> python exo.py 10 0
// erreur.

// $> python exo.py 3 5
// erreur.

const { argv } = require("process");

let numberUser = argv.slice(2); // on récupère les chiffres de l'utilisateur
numberUser = parseInt(numberUser);
function division(number1, number2) {
    let result = number1 / number2;
    return parseInt(result);
}

function modulo(number1, number2) {
    result = number1 % number2;
    return parseInt(result);
}

if (numberUser[1] == 0){ //on écarte ce cas en premier sinon on rentre dans les autres cas
    console.log("erreur");
}
else if((numberUser[0] > numberUser[1])){
    console.log("resultat: " + division(numberUser[0], numberUser[1]));
    console.log("reste: " + modulo(numberUser[0], numberUser[1]));
}
else if(numberUser[0] < numberUser[1]){
    console.log("erreur");
}
else if(numberUser[0] == numberUser[1]){
    console.log("résultat: 1");
    console.log("reste: 0");
}




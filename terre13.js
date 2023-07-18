// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

// Exemples d’utilisation :
// $> ruby exo.rb 11 40 34
// 34

// $> ruby exo.rb 2 1 3
// 2

// $> ruby exo.rb 2 2 2
// erreur.

const { argv } = require("process");
let userInput = argv.slice(2);

number1 = parseInt(userInput[0]);
number2 = parseInt(userInput[1]);
number3 = parseInt(userInput[2]);

if (userInput === null || userInput.length != 3) {
    console.log("Entrez 3 nombres");
}
else if ((isNaN(number1)) || ((isNaN(number2))) || ((isNaN(number3)))) {
    console.log("Il faut rentrer 3 nombres!")
}

else if (number1 < number2 && number1 > number3) {
    console.log(parseInt(number1));
}
else if (number2 > number1 && number2 < number3) {
    console.log(parseInt(number2));
}
else {
    console.log(parseInt(number3));
}

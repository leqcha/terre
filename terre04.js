// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

// Exemples d’utilisation :
// $> ruby exo.rb 2
// pair

// $> ruby exo.rb 5
// impair

// $> ruby exo.rb Bonjour
// Tu ne me la mettras pas à l’envers.

// $> ruby exo.rb
// Tu ne me la mettras pas à l’envers.

// Attention : gérez aussi les entiers négatifs.

const { argv } = require("process");
let number = argv.slice(2);

if ((number % 2) == 0 ) {
    console.log("pair");
}
else if ((number % 2) == 1){
    console.log("impair");
}
else if(isNaN(number)){
    console.log("Ce n'est pas un nombre !");
}

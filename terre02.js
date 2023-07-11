// Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.

// Exemples d’utilisation :
// $> ruby exo.rb je suis solide !
// je
// suis
// solide
// !

const { argv } = require("process"); // on importes les infos
let displayArgs = argv.slice(2).join('\n'); // on concatène le 3ième tableau de argv
console.log(displayArgs);




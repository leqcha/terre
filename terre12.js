// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.

// Exemples d’utilisation :
// $> ruby exo.rb 11:40PM
// 23:40

// Attention : midi et minuit.

const { argv } = require("process");
let userInput = argv.slice(2);

// on adapte l'heure max à 12h59 en créant les cas AM et PM pour gérer les erreurs
const hourPatternAM = /^(0[0-9]|1[0-2]):([0-5][0-9])AM$/;
const hourPatternPM = /^(0[0-9]|1[0-2]):([0-5][0-9])PM$/;

if (userInput.length === 0) {
    console.log("Aucun argument n'a été passé");
}
else if (!hourPatternAM.test(userInput) && !hourPatternPM.test(userInput)) { // cas si le modèle n'est pas respecté
    console.log("Entrez un format valide de type hh:mmAM ou hh:mmPM");
} else {
    let hour = userInput[0].split(":");
    let minutes = hour[1].slice(0, -2); // on n'utilise pas le AM ou le PM dans le résultat
    hour = parseInt(hour[0]);

    if (hourPatternAM.test(userInput) && hour === 12) { // cas minuit
        console.log("00:" + minutes);
    } else if (hourPatternAM.test(userInput)) {
        console.log(hour + ":" + minutes);
    } else if (hourPatternPM.test(userInput) && hour < 12) {
        hour += 12;
        console.log(hour + ":" + minutes);
    } else if (hourPatternPM.test(userInput) && hour === 12) { // cas midi
        console.log(hour + ":" + minutes);
    }
}










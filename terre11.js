// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.

// Exemples d’utilisation :
// $> ruby exo.rb 23:40
// 11:40PM

// Attention : midi et minuit.

const { argv } = require("process");
let userInput = argv.slice(2);

const hourPattern = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

if (!hourPattern.test(userInput)) { // on test le format plutôt que de tester toutes les combinaisons possibles trop nombreuses
    console.log("Entrez une heure au format de type HH:MM");

} else if (userInput.length === 0) {
    console.log("Aucun argument n'a été passé");

} else {
    let hour = userInput[0].split(":"); // on sépare en 2 "hour" pour manipuler les heures et les minutes indépendement 
    let minutes = hour[1];
    hour = hour[0];
  
    if (hour < 12) {
        console.log(hour + ":" + minutes + "AM");

    } else if (hour == 12) {
        console.log(hour + ":" + minutes + "PM");

    } else if (hour > 12 && hour < 24) {
        console.log(hour - 12 + ":" + minutes + "PM");
    }
}


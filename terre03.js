// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py n
// nopqrstuvwxyz
// $>

// Attention : votre programme devra utiliser une boucle.

const { argv } = require("process");
let alphabetLetter = "abcdefghijklmnopqrstuvwxyz";
let userLetter = argv.slice(2); // on récupère la lettre de l'utilisateur

if (!isNaN(userLetter) || userLetter.length < 1 ) { // cas si on entre un chiffre
    console.log("Entrez une lettre de l'alphabet");
}
else if ((userLetter.length > 1) || (userLetter[0].length > 1)){ // cas si on entre plus d'une seule lettre
    console.log("Il ne faut rentrer qu'une lettre !")
}
else {
    for (let i = 0; i < alphabetLetter.length; i++) { // on boucle sur l'alphabet
        if (userLetter == alphabetLetter.charAt(i)) { // si la lettre entrée correspond à une lettre du tableau
            console.log(alphabetLetter.slice(i)); // on affiche l'alphabet à partir de la lettre en cours
        }
    }
}
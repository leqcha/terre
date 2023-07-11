// créer un programme qui affiche l'alphabet en lettres minuscules suivi d’un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py
// abcdefghijklmnopqrstuvwxyz
// $>
// Attention : votre programme devra utiliser une boucle.

let alphabetLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let alphabet = 0;

for (let i = 0; i < alphabetLetter.length; i++) { // on boucle pour concaténer
    alphabet = alphabetLetter[i];
    alphabet = alphabetLetter.join("");
}
console.log(alphabet + "\n");
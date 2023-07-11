// Créez un programme qui affiche son nom de fichier.
// Exemples d’utilisation :

// $> node exo.js
// exo.js

// $> node crevette.js
// crevette.js

const filePath = process.argv[1]; // on récupère le chemin
let getName = filePath.split(/[\\]/); // on l'envoie dans un tableau
console.log(getName.pop()); // on récupère le dernier élement du tableau

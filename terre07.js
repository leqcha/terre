// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

// Exemples d’utilisation :
// $> python exo.py “Hello world!”
// 12

// $> python exo.py
// erreur.

// $> python exo.py “Bonjour” “Aurevoir”
// erreur.

// $> python exo.py 10
// erreur.


//PSEUDO CODE
// ----> vérification que l'argument passé n'est pas null, 
//       n'est pas un chiffre 
//       qu'il n'y en a qu'un

// ----> écrire une boucle qui passe la taille de l'argu lettre par lettre et stocker la variable dans un compteur
// ----> afficher le compteur

const { argv } = require("process");
let userArg = argv.slice(2);

let count = 0;

if (userArg.length > 1){ // on vérifie qu'il n'y a qu'un seul argu passé
    console.log("erreur.");
}
else if(!isNaN(Number(userArg))){ // si c'est un chiffre
    console.log("erreur.");
}
else if(userArg === null){ // s'il y a bien un argu passé
    console.log("erreur.");
}
else{ // on met le cas attendu en dernier, pour être sûr de ne pas rentrer dans les autres avant
    userArg = userArg.join(); // on concatène en string pour manipuler
    for (let i = 0; i < userArg.length; i++) {
        count++;
    }
    console.log(count);
}


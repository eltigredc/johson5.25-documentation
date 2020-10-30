// Array []
// L'objet JavaScript Array est un objet global utilisé dans la construction de tableaux; 
// qui sont des objets de haut niveau de type liste.


// EXEMPLE:

// Créer un Array
let tableaux = ['element1', 'element2'];


// Accéder un Array élément
let premierElement = tableaux[0];
    // element1

let dernierElement = tableaux[tableaux.length - 1];
    // element2

// Boucle sur un Array
tableaux.forEach(function(item, index, array) {
  console.log(item, index);
});
    // element1 0
    // element2 1

// Ajouter à la fin de l'Array
let ajouterFin = tableaux.push('element3');
    // ["element1", "element2", "element3"]

// Enlever à la fin de l'Array
let enleverFin = tableaux.pop(); // élément element3 (de la fin)
    // ["element1", "element2"];

// Enlever au debut de l'Array
let enleverDebut = tableaux.shift(); // enleve element1 (du début)
    // ["element2"];

// Ajouter au début de l'Array
let ajouterDebut = tableaux.unshift('elementpremier') // ajoute elementpremier (au début)
    // ["elementpremier", "element2"];

// Trouver la position d'un élément Array
let pos = tableaux.indexOf('element2');
    // 1

// Enlever un élément par position
let enleveParPosition = tableaux.splice(pos, 1);                                     
    // ["elementpremier"];

// Enlever plusieurs éléments par position
let grandTableaux = ['element1', 'element2', 'element3', 'element4'];
console.log(grandTableaux); 
    // ['element1', 'element2', 'element3', 'element4']

    // Supprimer plusieurs éléments
let pos1 = 1, n = 2;
let enlevePlusieursElements = grandTableaux.splice(pos, n); 
    // n définit le nombre d'éléments à supprimer à partir de cette position (pos) jusqu'à la fin du tableau.


// Copie un Array
let copie = grandTableaux.slice(); 
    // ['element1', 'element2', 'element3', 'element4']



// Nouvel Array
[element1, element2, elementN]
new Array(element1[element2[elementN]])
// new Array(arrayLength)/
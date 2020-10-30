// document.querySelector()

// le query Selector est un sélecteur javascript qui permet de sélectioner un élément du DOM (HTML)

// exemple
document.querySelector("HTMLtag")
//
// document est un mot clé qui réfère à la page HTML entière
// querySelector est le nom de la fonction
// c'est une fonction qui prend un seul paramètre le tag HTML

// on peut lui fournir n'importe quel tag HTML

// une classe
document.querySelector(".class")

// une ID
document.querySelector("#id")

// un tag basique
document.querySelector("img")

// on peut également combiner les sélecteurs

// l'élément qui a l'id "box" ET la classe "image"
document.querySelector("#box.image")

// l'élément qui a la classe "image" et qui se trouve DANS l'élément qui a l'id "box"
document.querySelector("#box .image")

// la fonction querySelector nous rendra toujours UN et UN seul élément
// si jamais il y a plusieurs éléments correspondant au sélécteurs il rendra le premier qu'il trouvera.

// On peut donner la valeur de notre sélecteur à une variable pour permettre ensuite des manipulations
// ex

let text = document.querySelector(".text")


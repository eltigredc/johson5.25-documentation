/*Un array est un objet qui contient une serie de valeurs, separées par une virgule (>< variable qui ne peut stocker qu'une seule valeur). 
Ces valeurs peuvent être :
- Strings
- Nombres
- Objets 
- Fonctions

DEFINIR UN ARRAY  : */

const nameOfTheArray = [ "Diogo" , "Becode", "BeCentral"]; // Array contenant des strings

const nameArrayNumber = [ 234 , 554, 49393]; //  Array contenant des nombres

const nameArrayOfObjects =  [                   // Array of Objects : array contenant des objets
    {
      "color": "purple",                    // Objet [0] content 3 keys/Properties et 3 values
      "type": "minivan",
      "capacity": 7
    },
    {                                       // Objet [1]
      "color": "red",
      "type": "station wagon",
      "capacity": 5
    }
];

const nameArrayFunctions = [
    {                                     
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
    
    function() {
        console.log("")
    }
];
   

// METHODES(Functions in array) PRINCIPALES ASSOCIEES AUX ARRAYS : 

// Determine l'objet en renvoyant une valeur boléenne : true si l'objet est un array, false si l'objet n'est pas un array
nameOfTheArray.isArray() 

// Determine la longueur de l'array (cad le nombre d'éléments qui constituent l'array)
nameOfTheArray.length()

//Methode qui va itérer sur tout les elements de l'array pour renvoyer l'index de l'élément demandé. Si aucun élément specifique n'est demander, la methode renvoie l'index du premier élément dans l'array
nameOfTheArray.indexOf(element[nameOfTheArray]);

//Idem que indexOf() mais va tester tous les elements de l'array contre la fonction definie en parametre et va renvoyer l'index du premier element qui repond comme vraie aux conditions de la fonction/
nameOfTheArray.findIndex(function(elem, index, array){

});

// Ajoute a la fin de l'array 1 ou plusieurs élément(s) ET renvoie la nouvelle longueur/ taille de l'array
nameOfTheArray.push();

// Renverse l'ordre des éléments dans un array 
nameOfTheArray.reverse();


nameOfTheArray.pop();

nameOfTheArray.shift();

nameOfTheArray.unshift();

nameOfTheArray.splice();


// FOREACH LOOP OU EN ES6 : FILTER / MAP / SOME / REDUCE METHODES

/* forEach est une methode qui prend une fonction(callBackFunction = fonction appelée dans une autre fonction High Order Function) et s'execute sur chacun des éléments de l'array, un par un.

-Fonctionne de la même façon que la "for loop" mais elle est plus légere a écrire et le scope est plus étroit(cleaner code).

- Methode generique donc a utiliser seulement s'il n'y a pas de méthodes plus specifiques utiles pour l'execution.
*/
nameOfTheArray.forEach(function(value, index, array){

});

/*
Methode filter(), comme la forEach() prend une fonction et itere sur chacun des elements de l'array en les confrontant a cette fonction. 

La difference majeure entre la forEach et la filter est que cette derniere methode EXECUTE la fonction sur chacun des elements ET VERIFIE LE RETURN STATEMENT. Seulement si le return renvoie un "true", l'element est poussé dans l'array résultant. Si return ="false", l'element n'est pas repris dans l'array.
*/

//Formule
let newArray = nameOfTheArray.filter(function(element, index, array){

});

//Exemple
let sample = [1, 2, 3] 
// es5
let result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)
// es6
let result = sample.filter(elem => elem !== 2)
/* output */
[1 , 3]


/*Comme forEach() et la filter(), la méthode map() prend une callback fonction et itère, exécute la fonction sur chacun des éléments des l'array;

AVEC POUR DIFFERENCE que la map() va générer un nouvel array basé sur l'array préexistant : le nouvel array sera constitué des elements transformer par la callback fonction

Sert a modifier les éléments d'un array*/

// Formule
let newArray = nameOfTheArray.map(function(element, index, array){

// Exemple
let sample = [1, 2, 3];
// es5
let mapped = sample.map(function(elem) {
    return elem * 10;
});
// es6
let mapped = sample.map(elem => elem * 10)
console.log(mapped);
/* output */
[10, 20, 30]



nameOfTheArray.some()


nameOfTheArray.reduce()








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

nameOfTheArray.forEach()

nameOfTheArray.map() 

nameOfTheArray.some()

nameOfTheArray.reduce()

nameOfTheArray.filter()






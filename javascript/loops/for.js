// for loop

// for est une boucle qui est utilisée quand on connait le nombre de fois que l'on va devoir répéter une série d'instruction

// exemple
for (let i=0; i<10; i++){
    instruction1;
    instruction2;
    instruction3;
}

// Comme on peut le voir dans l'exemple ci dessus, la boucle for contient 3 "phases" à l'intérieur des parenthèses et séparés par des ;

// La première est la phase d'initiation :
// Dans notre précédent exemple : let i=0
// On peut donc déclarer une variable dans cette partie, et l'initier càd lui attribuer une première valeur. Attention ca ne marche qu'avec des valeurs entières !

// La deuxième est la phase de test :
// Dans notre précédent exemple : i<10
// La boucle s'executera tant que cette condition est respectée.

// La troisième est la phase d'itératon :
// Dans notre précédent exemple : i++
// Il s'agit généralement d'une incrémentation, i++ pour i=i+1 (la difference entre i++ et ++i ne change rien ici)

// i (pour itérator) est très souvent utilisé mais n'importe quelle autre variable est utilisable



// 1 - La phase d'initiation est la première qui sera lue, et elle ne sera lue qu'une fois ! Avant de passer au 2.

// 2 - Il lira ensuite les instruction au sein de la boucle, entre les accolades. Avant de passer au 3.

// 3 - Puis passera a la phase d'itération. Avant de passer au 4.

// 4 - Et ensuite la phase de test, si la condition est fausse la boucle s'arrête, si elle est vrai il repasse au 2

// Dans notre précédent exemple : 

for (let i=0; i<10; i++){
    instruction1;
    instruction2;
    instruction3;
}

// Les instructions seront donc lue 10 fois..



// On peut passer une itération de boucle et donc directement incrémenter pour passer a la suivante grâce a l'instruction : continu

// On peut également sortie de la boucle for a tout moment grâce a l'instruction break

// Ces deux instructions peuvent s'avérer très utiles pour les performances ! :-)




// for .. in

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// Boucle for permettant de parcourir des objets

// On peut dans ce cas utiliser une constante pour la propriété étant donné qu'elle est unique au sein d'un objet

// La constante prendra la valeur de la première propriété de l'objet lors du premier passage dans la boucle, de la deuxième lors d'une deuxième passage et ainsi de suite.

// ${property} se référe ici a la propriété, donc a son nom et ${object[property]} prend la valeur de la propriété pour l'objet en question.

// Le résultat de cette boucle pourrait donc ressembler a ceci :

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"



// for .. of

for (const element of array1) {
    console.log(element);
}

// Boucle for permettant de parcourir des arrays, même fonctionnement que pour les objects mais appliquer aux arrays.

// element faisant référence a l'élément se trouvant aux différents index parcouru en commençant par 0 (première élément d'un array est toujours a l'index 0)



// for await...of

for await (variable of iterable) {
    instruction
}


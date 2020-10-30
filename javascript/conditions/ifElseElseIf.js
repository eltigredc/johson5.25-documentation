// "IF / ELSE IF / ELSE" serve à executer un contenu (que l'ont determinera) seulement si une condition préalable est remplie

// Cela se présente generalement dans la forme suivante:

/* if(condition){
    si la condition est remplis, je veux executer ce contenu 
}else if(autre condition){
    si la premiere condition n'est pas remplie, mais que celle ci est remplie, je veux executer ce contenu-ci
} else{
    si aucune de mes condition précédente est remplie, je veux executer ce contenu-ci
}*/

// Remarque: Il ne faut pas necessairement tous les mettre, on pourrait très bien utiliser seulement des "if" sans "else if" ni "else". 
//           Nous utiliserons l'un ou l'autre en fonction de nos besoin. il peut y avoir par exemple un "if" et 5 "else if", 
//           mais par contre "else" il y'en aura un seul, car c'est dans le cas ou je veu executer un contenu si les différente conditions
//           ne sont pas remplie.

// Exemple:

let a = 3;
let b = 5
if(a < b){
    a = 5    //comme a (3) est effectivement plus petit que b(5), la valeur de a va changer pour devenir 5
} else if (a == b){
    b++  //(on peut aussi l'écrire comme ceci : "b = b + 1"
    //si le a(3) etait égal à b (5), la valeur de b aurait augmenter de 1
}else {
    a = a + b //on peut aussi l'écrire comme ceci : "a+= b"
    // ce qu'il nous reste c'est le cas ou a serait plus grand que b, si c'est le cas, 
    // alors la valeur de a sera égal a la somme des deux variable
}

// on peut utiliser la console pour tester ces différentes conditions en modifiant les variable a et b
console.log(a);
console.log(b); 


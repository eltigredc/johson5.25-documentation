
/*Types de nombres:

Nombres naturels (N), Appelés entiers positifs, Ce sont les nombres {1, 2, 3, 4, 5,…}
Nombres entiers (W). C'est l'ensemble des nombres naturels, plus zéro {0, 1, 2, 3, 4, 5,…}.
Entiers (Z). C'est l'ensemble de tous les nombres entiers plus tous les négatifs {⁻2, ⁻1, 0, 1, 2,…}
Nombres rationnels (Q). Ce sont toutes les fractions où les nombres du haut et du bas sont des entiers; par exemple, 1/2, 3/4, 7/2, ⁻4 / 3, 4/1 [Remarque: le dénominateur ne peut pas être 0, mais le numérateur peut l'être].
Nombres réels (R), Appelés nombres de mesure. Cela inclut tous les nombres qui peuvent être écrits sous forme décimale. Cela inclut les fractions écrites sous forme décimale, par exemple 0,5, 0,75 2,35, ⁻0,073, 0,3333 ou 2,142857. Il comprend également tous les nombres irrationnels tels que π, √2 etc. Chaque nombre réel correspond à un point sur la droite numérique.*/



// Si on considere que dans JS tout est OBJET alors NUMBER en est uns!

// L'objet JavaScript Number est un objet qui permet de travailler avec des valeurs numériques. 
// Les principales utilisations de l'objet Number sont:
new Number(valeur);

/*Si l'argument ne peut pas être converti en nombre, il renvoie*/ NaN
/* Dans un contexte non constructeur c'est-à-dire sans l'opérateur*/ new Number /*il peut être utilisé pour effectuer une conversion de type.*/



// EXEMPLE:

// L'objet Number affecte des valeurs à plusieurs lettres numériques:
let plusGrandNum = Number.MAX_VALUE;
let plusPetitNum = Number.MIN_VALUE;
let numInfini = Number.POSITIVE_INFINITY;
let negatifInfiniNum = Number.NEGATIVE_INFINITY;
let PasUnNum = Number.NaN;

// Nombre entier
let plusGrandEnt = 9007199254740991;
let plusPetitEnt = -9007199254740991;

// conversion de l'object Date en chiffrement en utilisant des nombres dans une fonction.
let date = new Date('December 17, 1995 03:24:00');
console.log(Number(date));
    // "819199440000".

// Conversion numerique "strings" et "null" en nombres
Number('123')     // 123
Number('12.3')    // 12.3
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0 
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN





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




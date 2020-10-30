
// DEFINITION:
//Le constructeur Object crée un wrapper d'objet pour la valeur donnée. 
// Si la valeur est nulle ou non définie, il créera et retournera un objet vide, sinon, 
// il retournera un objet d'un Type qui correspond à la valeur donnée. 
// Si la valeur est déjà un objet, elle renverra la valeur.
// Lorsqu'il est appelé dans un contexte non constructeur, Object se comporte de la même manière que new Object ()

// lEXIQUE:

/* Descripteur:
Tout objet en JavaScript a un ensemble de propriétés, et chacune de ces propriétés a un descripteur. 
C'est un objet qui définit un comportement de propriété et ses propres propriétés. 
De nombreuses méthodes statiques Object interagissent avec lui.*/


// SYNTAX:

// Initialiseur d'objet
{ [ nameValuePair1[ nameValuePair2[ nameValuePairN] ] ] }

// Appelé en tant que constructeur
new Object([value])



// METHODES du constructeur Object

// Copie les valeurs de toutes les propriétés propres énumérables d'un ou plusieurs objets source vers un objet cible.
Object.assign()

// Crée un nouvel objet avec l'objet prototype et les propriétés spécifiés.
Object.create()

// Ajoute une propriété nommée décrite par un descripteur donné à un objet.
Object.defineProperty()

// Ajoute plusieurs propriétés nommées décrites par les descripteurs donnés à un objet.
Object.defineProperties()

// Renvoie un tableau contenant toutes les paires [clé, valeur] des propres propriétés de chaîne énumérables d'un objet donné (Opposé de  Object.fromEntries).
Object.entries()

// Renvoie un nouvel objet à partir d'un itérable de paires clé-valeur (Opposé de  Object.entries).
Object.fromEntries()

// Fige un objet: un autre code ne peut pas supprimer, ni modifier les propriétés.
Object.freeze()

// Renvoie un descripteur de propriété pour une propriété nommée sur un objet.
Object.getOwnPropertyDescriptor()

// Renvoie un objet contenant tous les propres descripteurs de propriété d'un objet.
Object.getOwnPropertyDescriptors()

// Renvoie un tableau contenant les noms de toutes les propriétés énumérables et non énumérables de l'objet donné.
Object.getOwnPropertyNames()

// Renvoie un tableau de toutes les propriétés de symbole trouvées directement sur un objet donné.
Object.getOwnPropertySymbols()

// Renvoie le prototype de l'objet spécifié.
Object.getPrototypeOf()

// Compare si deux valeurs ont la même valeur. Égal à toutes les valeurs NaN (qui diffèrent à la fois de la comparaison d'égalité abstraite et de la comparaison d'égalité stricte).
Object.is()

// Détermine si l'extension d'un objet est autorisée.
Object.isExtensible()

// Détermine si un objet a été gelé.
Object.isFrozen()

// Détermine si un objet est scellé.
Object.isSealed()

// Renvoie un tableau contenant les NOMS de toutes les propriétés de chaîne énumérables propres à l'objet donné.
Object.keys()

// Renvoie un tableau contenant les VALEURS qui correspondent à toutes les propriétés de chaîne énumérables propres à un objet donné.
Object.values()

// Empêche toute extension d'un objet.
Object.preventExtensions()

// Empêche tout autre code de supprimer les propriétés d'un objet.
Object.seal()

// Définit le prototype (c'est-à-dire la propriété interne [[Prototype]]).
Object.setPrototypeOf()



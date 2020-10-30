// JAVASCRIPT • CLASSES • class MonObject { } • ES6

// Les class JavaScript sont en quelques sortes des moules génériques pour créer des objets similaires



// G E N E R A L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

class Humain { }                                        //instancie un prototype *vide* d'objet nomé "Humain"

let nouvelHumain = new Humain                           //créer un NEW objet "nouvelHumain" en suivant le prototype "Humain" 



// C O N S T R U C T E U R  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

class Animal {
    constructor(espece,sexe,continent){                 //Construction generale du prototype "Animal" en fonction d'(arguments)
        this.espece=espece,                             //définis THIS propriétées du prototype, en y assignant les arguments
        this.sexe=sexe,
        this.continent=continent
    }
};

let pingouin = new Animal ("pingouin","femelle","Pôle Nord");
console.log(pingouin)
//output: Animal { espece: 'pingouin', sexe: 'femelle', continent: 'Pôle Nord' }



// M E T H O D E  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

class Personnage {
    constructor(nom,prénom){
        this.nom=nom,
        this.prenom=prénom
    }
                                                        //Créer une methode (=fonction) propre au prototype de "Personnage"
    parle(replique) {                          
        console.log(`${this.nom} ${this.prenom} dit: "${replique}"`);
    }
};

let mrGeorge = new Personnage ("George","Creve-Coeur");
console.log(mrGeorge.parle("Bonjour Becode!"));


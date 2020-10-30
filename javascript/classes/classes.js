// JAVASCRIPT • CLASSES • class MonObject { } • ES6

// Les class JavaScript sont en quelques sortes des moules génériques pour créer des objets similaires



// G E N E R A L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

class Humain { }                                                    //instancie un prototype *vide* d'objet nomé "Humain"

let nouvelHumain = new Humain                                       //créer un NEW objet "nouvelHumain" en suivant le prototype "Humain" 



// C O N S T R U C T E U R  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

class Animal {
    constructor(espece,sexe,continent){                             //Construction generale du prototype "Animal" en fonction d'(arguments)
        this.espece=espece,                                         //définis THIS propriétées du prototype, en y assignant les arguments
        this.sexe=sexe,
        this.continent=continent
    }
};

let pingouin = new Animal ("pingouin","femelle","Pôle Nord");
console.log(pingouin)
//output>> Animal { espece: 'pingouin', sexe: 'femelle', continent: 'Pôle Nord' }



// M E T H O D E  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Une methode est une sorte de fonction mais au seins d'une classe. 
// On l'apelle comme ceci: monNouvelObjet.methode(argument)

class Personnage {
    constructor(nom,prénom){
        this.nom=nom,
        this.prenom=prénom
    }
                                                                    
    parle(replique) {                          
        console.log(`${this.nom} ${this.prenom} dit: "${replique}"`);
    }
};

let mrGeorge = new Personnage ("George","Creve-Coeur");
console.log(mrGeorge.parle("Bonjour Becode!"));
//output>> George Creve-Coeur dit: "Bonjour Becode!"



// G E T T E R - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Le getter permet de créer une methode et de la lier à l'objet à la maniére une propriété.

class Alien {
    constructor(planéte,couleur){
        this.planete=planéte,
        this.couleur=couleur
    }

    get parle(){
        console.log(`Bonjour terriens!`)
    }
};

let newAlien = new Alien ("mars","bleu");
console.log(newAlien.parle);
//output>> Bonjour terriens!

// S E T T E R - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Le setter va de pair avec le getter, il permet de traiter une valeur donner à la propriété auquel il est relié

class Person {
    constructor(firstName,lastName){
        this.firstname=firstName;
        this.lastname=lastName;
    };

    get name(){
        return `${this.firstname} ${this.lastname}`
    };

    set name(fullName){
        let separe = fullName.split(' ');
        this.firstname=separe[0];
        this.lastname=separe[1];
    };
}

let person1 = new Person ("John", "Doe");
console.log(person1);
//output>> Person { firstname: 'John', lastname: 'Doe' }
let person2= new Person ();
person2.name="Jean-Charles Duchateau"
console.log(person2);
//output>> Person { firstname: 'Jean-Charles', lastname: 'Duchateau' }


// E X T E N D S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// La methode extends permet d'inherer un objets, de lui creer une sorte de descendance

class Ancetres{
    constructor(){
        this.nomDeFamille="Rousseau"
    }
};

class Enfants extends Ancetres{
    constructor(prenom){
        super()
        this.prenom=prenom
    }
};

let enfant1= new Enfants ("Jeanne");
console.log(enfant1);
//output>> Enfants { nomDeFamille: 'Rousseau', prenom: 'Jeanne' }

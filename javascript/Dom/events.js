// JAVASCRIPT • DOM&EVENTS • addEventListener() • ES6
//Les evenements permettent d'interargir avec l'user en fonction des evenements qui se produisent (touche clavier, click souris, ...)


// G E N E R A L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

let monBouton= document.querySelector("button");

monBouton.addEventListener("click",maFonction(){            //sur un bouton dans l'html, on surveille l'evement "click", et si il a lieu;
    alert("Quelqu'un a cliquer sur mon bouton!")            //on execute maFonction()
})



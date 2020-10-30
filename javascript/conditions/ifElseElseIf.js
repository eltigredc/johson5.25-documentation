// JAVASCRIPT • CONDITIONS • if(){}else / if(){}ifelse(){}else • ES6

// Les condition permettent d'executer un code si une, ou plusieurs conditions sont respectées



// I F - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

let couleur="rouge";

if(couleur==="rouge"){                                                  //si ma variable couleur est strictement egale à "rouge" alors...
    console.log("Tu ne peux pas traverser la route")
}else{                                                                  //sinon...
    console.log("On ne parle peut-être pas de signalitique...")
}
//output>> Tu ne peux pas traverser la route
// IF E L S E - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

let humeur="Bonne";

if(humeur==="Mauvaise"){
    console.log("Ne sors pas de chez toi!")
}else if(humeur==="Bonne"){
    console.log("Je m'en fou!")
}else{
    console.log("Peut importe en fait...")
}
//output>> Je m'en fou!
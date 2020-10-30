// JAVASCRIPT • DOM&MANIPULATIONS • ES6
// Javascript permet de modifier, deplacer, ou retirer des element du DOM


// E C R I R E - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

document.getElementById("monParagraphe").innerHTML = "Hey! J'existe!";
//output>> Ecris "Hey! J'existe!" dans un conteneur dont  l'ID est "monParagraphe"

// S T Y L I S E R  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

let uneDiv= document.querySelector("#carre");
uneDiv.style.backgroundColor="red";
//output>> Change la couleur d'une Div avec l'id "carre" en rouge

// C R E E R - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


let newDiv=document.createElement("div");               //creer une div qui n'apparait pas encore dans l'HTML
newDiv.setAttribute("id","children");                   //ajoute un atribut ID "children" à notre nouvelle div
let conteneur= document.querySelector("#parent");       //récupére un conteneur, qui sera le parent de notre nouvel element
conteneur.appendChild(newDiv);                          //lie le parent "conteneur" à l'enfant "newDiv"
//output>> Un conteneur qui contient une div 


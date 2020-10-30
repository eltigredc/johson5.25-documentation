// Events are when something happens to the HTML elements.
//      It can be any type of events from the user or the browser...
//      For exemple, an user event is when a button is clicked, a key 
//      on the keyboard is pushed, a file is draged on your page, the 
//      mouse is hovering an element,... When a browser event is when
//      your page has finished loading, an animation is launched, the 
//      loading of a media is aborted,...

// Les events (événements), c'est quand il se passe quelque chose sur les elements du HTML. 
//      Ca peut etre n'importe quel genre d'événements de la part de
//      l'utilisateur ou du browser... Par example, un événement du à 
//      l'utilisateur peut être lorsqu'un bouton est clické, qu'une 
//      touche de clavier est pressée, un fichier est drager sur votre
//      sur votre page, la souris est aud dessus d'un élément,... Un 
//      événement du au browser peut être quand une page a fini de 
//      chargé, qu'une animation a été lancée, que le chargement d'un
//      media a été abandoné,...  

////////////////////////////////////////////////////////////////////////////////////////////
<element event="some JavaScript"></element>;

// One of the way for using events is to directly write in the HTML the 
//      action you want to ocure on the wanted element. For that, you 
//      have to write the javascript code in the oppening tag of the 
//      element as you would do for some style. 

// Un des moyen d'utiliser les events est de directement écrire l'action
//      voulue sur l'élément HTML concerné. Il, suffit d'écrire le code
//      javascript dans la balise d'ouverture de l'élément comme on le 
//      ferai pour y ajouter du style.

//      Exemple | Example
<button onclick="document.getElementById('text').innerHTML = 'Pizza time!'">The time is?</button>;

// When the button is clicked, the element with the Id "text" will print "Pizza time!".
// Quant on click sur  le bouton, l'élément portant l'Id "text" affichera "Pizza time!".

////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("event",function(){});

// Another way to use events is to put an "event listener" on the element.
//      The event listener will watch an element and if an specific event
//      is detected on this element, it will triger a function.

// Un autre moyen d'utiliser les events est de mettre un "event listener"
//      sur l'élément. L'event listener va alors surveiller cet élément 
//      et va déclencher une fonction si un certain type d'événement est
//      detecté sur celui-ci.

//      Exemple | Example 
document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("Text").innerHTML = "Hello World";
}

// In this case, when the button with the Id "button" is clicked, it will
//      triger myFunction. myFunction will then change the inner HTML of
//      my element with the Id "text" to "Hello World".

// Dans ce cas ci, quant on click le bouton avec l'Id "button", il va 
//      déclancher la fonction "myfunction", qui va ensuite afficher 
//      "Hello World" dans l'élément ayant l'Id "text".

//      Exemple 2 | Example 2 

document.getElementById("input").addEventListener("input", function(){
    document.getElementById("input").setAttribute("style","border:solid red 1px;");
});

// You can also put the function directly with the event listener like so.
//      Here, when something is typed in the element with the Id "input",
//      it will give to this element a red border of 1px.

// Vous pouvez aussi déclarer votre fonction avec l'event listener comme
//      ci-dessus. Ici, quant on écrit quelque chose dans l'élément ayant
//      l'Id "input", il va lui atribué un bordure rouge d'1px.
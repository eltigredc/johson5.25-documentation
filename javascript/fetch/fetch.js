/* becode "javascript fetch method" documentation
 *
 * coded by cristina
 * 30 oct 2020
 *
 */

// The Fetch API provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network

// This kind of functionality was previously achieved using XMLHttpRequest

// How does this works:
// fetch() can send network requests to the server and load or change new information whenever it’s needed
// fetch() interacts with the server by sending http requests

// The basic syntax is:
let promise = fetch(url, [options]); // the parameter options is not manadatory
// Without options, that is a simple GET request, downloading the contents of the url
// url – the URL to access
// options – optional parameters: method, headers etc.

// Let's take an example: we have a json file on the server which is accessible by following the link 'http://localhost:3000/heroes'
[
  {
    "id": 1,
    "name": "Cyclops",
    "alterEgo": "Scott Summers",
    "abilities": [
      "Optic force blasts",
      "Master tactician"
    ]
  },
  {
    "id": 2,
    "name": "Marvel Girl",
    "alterEgo": "Jean Grey",
    "abilities": [
      "Telekinesis",
      "Telepathy",
      "Astral projection"
    ]
  },
  {
    "id": 3,
    "name": "Beast",
    "alterEgo": "Hank McCoy",
    "abilities": [
      "Genius-level intellect",
      "Animal-like physiology with enhanced physical attributes and sharp claws and teeth"
    ]
  }
]

// We say to the server: get me all the data in that mini database (we can say that all this data is a database) 
fetch('http://localhost:3000/heroes') // here we make the call to the server to getting all the heroes
.then(response => response.json()) // then we get a response as a promise from the server
.then(data => console.log(data)) // then we get the actual data that we need
.catch(error => console.error(error)); // here we catch all the errors that may occur during the fetch

// in the console we will have all the heroes in one array of objects, like above

//**************************************************************************************************

// For getting only a hero from the database, we have to specify the id of the hero in the url
var heroId = 3;

fetch('http://localhost:3000/heroes/?id=' + heroId, {method: "GET"})
.then(response => response.json())
.then(data => {
	var hero = data[0];
	console.log(hero);
    // do stuff with this hero
})
.catch(error => console.error(error));

// the output in the console will be:
/*{
    "id": 3,
    "name": "Beast",
    "alterEgo": "Hank McCoy",
    "abilities": [
		"Genius-level intellect",
		"Animal-like physiology with enhanced physical attributes and sharp claws and teeth"
    ]
}*/

//**************************************************************************************************

// For adding a hero in the database, we have to specify the id of the hero in the url

// First step is to create an object with the data we want to insert in the database
let data = {
	"id": null,
	"name": "Maria",
	"alterEgo": "Mary the best",
	"abilities": ["js", "css", "php"]
};

// Then we make the request to the server 
fetch('http://localhost:3000/heroes', {
	method: "POST", // we have to specify the method (POST is for insert into database)
	body: JSON.stringify(data),
	headers: { "Content-type": "application/json; charset=UTF-8" }
})
.then(response => response.json())
.then(data => { console.log(data); })
.catch(error => { console.error(error);	});

//**************************************************************************************************

// For deleting a hero from the database, we have to specify the id of the hero in the url, and add DELETE method
fetch('http://localhost:3000/heroes/' + heroId, { method: "DELETE" })
.then(response => response.json())
.then(data => { console.log(data); })
.catch(error => { console.error(error);	});
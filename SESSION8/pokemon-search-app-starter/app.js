console.log("app.js is running");

//define a data source of pokemon objects
const pokemonList = [
  {
    name: "bellsprout",
    type: "grass",
    image: "bellsprouts.png",
    attack: 100,
  },
  {
    name: "Bulbasaur",
    type: "grass",
    image: "bulbasaur.png",
    attack: 100,
  },
  {
    name: "Charmander",
    type: "fire",
    image: "charmander.png",
    attack: 45,
  },
  {
    name: "Ditto",
    type: "normal",
    image: "ditto.png",
    attack: 40,
  },
  {
    name: "Eevee",
    type: "normal",
    image: "eevee.png",
    attack: 30,
  },
  {
    name: "Meowth",
    type: "normal",
    image: "meowth.png",
    attack: 80,
  },
  {
    name: "Pikachu",
    type: "electric",
    image: "pikachu.png",
    attack: 10,
  },
  {
    name: "Psyduck",
    type: "water",
    image: "psyduck.png",
    attack: 85,
  },
  {
    name: "Squirtle",
    type: "water",
    image: "squirtle.png",
    attack: 90,
  },
  {
    name: "Secret Unnamed Pokemon",
    type: "fire",
    image: "secretun named pokemon.png",
    attack: 55,
  },
];

//Detect when the page is finished loading
//innerHTML: will update the html inside a container element
//replace using = and append using +=
//document.querySelector("main").innerHTML = "<p>HELLO WORLD!</p>"
//document.querySelector("main").innerHTML += "<ul><li>Apple</li></ul>"

//function here
const pageLoaded = () => {
  console.log("Page is done loading!");

  //1. After the page finishes loading, dynamically populate the UI with your pokemon information
  //a. For each pokemon in the list
  // - generate the <div> html
  // - populate the <p> and <img> with the information for the current pokemon

  //code to ITERATE (loop) through an ARRAY
  //For each item in the array, output the <div>
  //correct
  for (currPokemon of pokemonList) {
    console.log(currPokemon);

    //Create a string that stores all this html
    const output = `
      <div class="box">
        <img src="/assets/${currPokemon.name.toLowerCase()}.png"/>
        <p>${currPokemon.name}</p>
        <p>${currPokemon.type}</p>
        <p>Attack: ${currPokemon.attack}</p>
        <button>Add To Team</button>
      </div>
      `;
    console.log(output);

    // console.log(`<div>`);
    // console.log(` <img src="/assets/${currPokemon.name.toLowerCase()}.png"/>`);
    // console.log(`<p>${currPokemon.name}</p>`);
    // console.log(`<p>${currPokemon.type}</p>`);
    // console.log(`<p>${currPokemon.attack}</p>`);
    // console.log(`<button>Add To Team</button>`);
    // console.log(`</div>`);

    //aappend that html to the section element
    document.querySelector("section").innerHTML += output;
  }
};

// need an array of pokemon that meet the search critera
// For each item in the search results array, output a <div>
// An array that contains all the pokemon who match

const searchButtonPressed = () => {
  console.log("BUTTON PRESSED!");
  // 2. Get the value from the text box
  const keyword = document.querySelector("input").value;
  console.log(`Search keyword is: ${keyword}`);

  // 3. Search for all pokemon whose name matches the search criteria (keyword that was entered in the textbox)
  // a. Loop through array

  //i. Create an array that contains pokemon who match the search criteria
  let matchingPokemon = [];

  for (currPokemon of pokemonList) {
    //convert the name to all lower case letters
    const nameAsLowerCase = currPokemon.name.toLowerCase();
    //convert the keyword to all lowercase letters
    const keywordAsLowerCase = keyword.toLowerCase();
    //compare the two lower case versions
    if (nameAsLowerCase.includes(keywordAsLowerCase) === true) {
      console.log(`I found a pokemon who matches! ${currPokemon.name}`);
      //If you were searching the FIRST pokemon that matches, then put a break
      //But if you want ALL pokemon that match, then don't include a break
      //break

      // 2. add the pokemon to the array
      // .push() adds an item to end of array
      matchingPokemon.push(currPokemon);
    } else {
      console.log(`${currPokemon.name} does not match`);
    }
  } // end of the for

  // 3. outside the for loop
  console.log(matchingPokemon);

  // 4. TODO: Loop through the matchingPokemon array, and output the matching pokemon to HTML
  // Show screenshot in slack
  // 3. outside the for loop

  // a. BEFORE you output, CLEAR any existing output
  document.querySelector("section").innerHTML = "";
  // b. OUTPUT
  for (currPokemon of matchingPokemon) {
    // generate the HTML for a single pokemon box
    const output = `
      <div class="box">
      <img src="/assets/${currPokemon.name.toLowerCase()}.png"/>
      <p>${currPokemon.name}</p>
      <p>${currPokemon.type}</p>
      <p>Attack: ${currPokemon.attack}</p>
      <button>Add To Team</button>
      </div>
      `;
    // append that html to the section element
    document.querySelector("section").innerHTML += output;
  }
}

const searchByType = () => {
  console.log("Searching by type...")
  // 1. get the value from the dropbox
  
  
  // If your <option> has a value attribtue
  // <option value="abc"> , THEN
  // document.querySelector("select").value ==> whatever is in the value attribute
  
  
  // If your <option> does NOT have a value attribute
  // <option>TESLA</option>
  // then, document.querySelector("select").value == TESLA
  const typeFromUI =
  document.querySelector("select").value
  console.log(`What did user choose? ${typeFromUI}`)
  // update their <option> tag to match
  // the data set
  
  
  // if (currPokemon.type === typeFromUI) {
  
  
  // }
  
  
  // 2. write the code to search for pokemon by type
  // - done in previous example
  
  
  // 3. output the results to screen
  // - done in previous example
  }
  

//Event detect here
document.addEventListener("DOMContentLoaded", pageLoaded);

// 1. Detect When the search button is pressed:
document
  .querySelector("#btn-search")
  .addEventListener("click", searchButtonPressed);





//TODO:
//When the search button is pressed:
// 1. Get the value from the text box
// 2. Loop though the pokemonList and find
// pokemon whose name contains the value from teh textbox
// .includes() --> searches for substrings
// 3. Output the matching pokemon to the CONSOLE
// 4. Output it to the HTML

// document.querySelector("button").addEventListener("Clicked", buttonPressed)

//------------------data-----------------------






//---------------elements-------------------------------------------------
const BASE_URL = "https://pokeapi.co/api/v2";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const statusEl = document.getElementById("status");
const cardEl = document.getElementById("pokemon-card");
const teamEl = document.getElementById("team");
const fuseBtn = document.getElementById("fuse-btn");


//--------------------------------functions--------------------



const showPokemon = (pkmn) => {
  


  document.getElementById("card-image").src = pkmn.sprites.versions["generation-ii"].crystal.front_default;
  document.getElementById("card-id").textContent = pkmn.id;
  document.getElementById("card-name").textContent = pkmn.name;
  document.getElementById("card-height").textContent = pkmn.height;
  document.getElementById("card-weight").textContent = pkmn.weight;
  document.getElementById("card-types").textContent = pkmn.types[0].type.name;
  document.getElementById("card-abilities").textContent = pkmn.abilities[0].ability.name;
  document.getElementById("card-stats").textContent = pkmn.stats.map(stat => stat.base_stat);
  
 


  cardEl.hidden = false;
}















async function handleInput(event) {
  event.preventDefault();

  const pokemon = input.value.toLowerCase().trim();


  //Validation






  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  const pkmn = await response.json();

console.log(pkmn)
  //call function
  showPokemon(pkmn)
}















//----------------------listeners------------------------------


form.addEventListener("submit", handleInput)









//--------------------run at load------------------------------
import logos from './assets/logos.png'

const base_url = "https://pokeapi.co/api/v2/pokemon/"
const pokemons = document.querySelector('.pokemons')

let pokemon1 = [];

async function getpokemon() {
  let response = await fetch(base_url);
  let data = await response.json();
  pokemon1 = data.results;
  console.log(pokemon1);

  pokemon1.forEach((pokemon) => {
    const li = document.createElement('li');
    li.innerHTML = `${pokemon.name}: ${pokemon.url}`;
    li.className = 'list_item';
    pokemons.append(li);
  });
}

getpokemon()








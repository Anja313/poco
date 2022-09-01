'use strict'

let pokemons_number = 150;
let allPokemon = [];
let pokemon;

let colors = {
	Fire: '#98d7a5',
	Grass: '#37893d',
	Electric: '#e6d85a',
	Water: '#5272dd',
	Ground: '#8b5e31',
	Rock: '#954aa5',
	Fairy: '#f3b2b2',
	Poison: '#98d7a5',
	Bug: '#b77a25',
	Dragon: '#ea5e13',
	Psychic: '#eaeda1',
	Flying: '#F5F5F5',
	Fighting: '#E6E0D4',
	Normal: '#7ed8cc',
	Ice: '#7ed8cc',
	Ghost: '#F5F5F5'
};

let main_types = Object.keys(colors);


async function init(){
	await getPokemonsFromApi();
	createPokemonCard();
	
}

async function getPokemonsFromApi() {
	for (let i = 1; i < pokemons_number; i++) {
		let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		let response = await fetch(url);
		pokemon = await response.json();
		allPokemon.push(await pokemon);
	}
};
// ---------------------------------------------



async function createPokemonCard() {
	let poke_container = document.getElementById('poke_container');

	for (let i = 0; i < allPokemon.length; i++) {
		let pokemon = getPokemenById(i);

		poke_container.innerHTML += /*html*/`

				<div  onclick = "showImg(this.id)"  class="pokemon" id="${pokemon.id}" style="background-color: rgb(50, 50, 50)" >
					<div style="color: ${pokemon.color}"> 
						${pokemon.name.toUpperCase()}
					<div >
				</div>
					
				<div>
					<img id="img" class="img" src=" ${pokemon.img}">
				</div>

				<div style="color: ${pokemon.color}"> 
					<span class="typeText"> Type - ${pokemon.type} </span>
				</div>
					<br>
					<span class="typeText">ID - ${pokemon.id.toString().padStart(3, '0')}</span>
				</div> `;
	}
}

//-----------------------------------------------------

function showImg(id) {
	let contain = document.getElementById('showPoco');
	contain.innerHTML = '';
	
	let pokemon = getPokemenById(--id);

	contain.innerHTML = /*html*/` 

		<div class="slideContainer"  >
				<div style="color: ${pokemon.color}"> 
					${pokemon.name.toUpperCase()}
				</div>

				<div>
					<img id="img"  class="img2" src=" ${pokemon.img}">
				</div>

				<div style="color: ${pokemon.color}"> 
					<span class="typeText"> Type - ${pokemon.type} </span>
				</div>	

				<span class="typeText">ID - ${pokemon.id.toString().padStart(3, '0')}</span>
		        <p onclick="backContent()" ><i class="bi bi-x-lg closeImg"></i></p>
	           	<p onclick="rightImg(pokemon.id)"><i class="bi bi-chevron-double-right rightImg"></i></p>
            	<p onclick="leftImg(pokemon.id)"><i class="bi bi-chevron-double-left leftImg"></i></p>

	       </div> 
			`;

}

function backContent() {

	document.getElementById('showPoco').innerHTML = '';
	getPokemon();
}



function getPokemenById(id) {

	let pokemon = allPokemon[id];
	let poke_types =  pokemon['types'][0]['type']['name'][0].toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
	let img =  pokemon['sprites']['other']['official-artwork']['front_default'];
	let pokemonid =  pokemon['id'];
	let names =  pokemon['name'];
	let color =  colors[poke_types];


	return {
		type: poke_types,
		img: img,
		id: pokemonid,
		name: names,
		color: color
	}
}

function search() {

	let search = document.getElementById('fixed-header-drawer-exp').value;
	search = search.toLowerCase();

	// console.log(search); 

	for (let i = 0; i < allPokemon.length; i++) {
		let poko = getPokemenById(i).name;

		if (poko.includes(search)) {
			document.getElementById(poko).style.display = 'block';
		} else {
			document.getElementById(poko).style.display = 'none';
		}
	}
}



function leftImg(i) {
    if (i > 0) {
        showImage(i - 1);
    } else {
        showImage(allPokemon.length - 1);
    }
}

function rightImg(i) {
    if (i < allPokemon.length - 1) {
        showImage(i + 1);
    } else {
        showImage(0);
    }
}











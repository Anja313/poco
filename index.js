
'use strict'



let pokemons_number = 150;
let allPokemon = [];
console.log('allPokemon', allPokemon);
let pokemon;
console.log('pokemon', pokemon);
// let allName =[];




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




async function getPokemon() {

	for (let i = 1; i < pokemons_number; i++) {
		let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		let response = await fetch(url);
		pokemon = await response.json();
		allPokemon.push(await pokemon['name']);
		// console.log('pokemon', pokemon);
		// console.log(' Type', pokemon['types'][0]['type']['name'])
		// console.log(pokemon['types'][0]['type']['name'][0])
		// console.log( pokemon['name'][0])
		// console.log('ID ', pokemon['id'])
		// console.log(' Name', pokemon['name'])
		// console.log('name', pokemon)

		// allName.push(pokemon['name'])
		// console.log('allName', allName)

		await createPokemonCard();
		//  search();

	}
};
// ---------------------------------------------




async function createPokemonCard() {
	let poke_container = document.getElementById('poke_container');

	let poke_types = await pokemon['types'][0]['type']['name'][0].toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
	let img = await pokemon['sprites']['other']['official-artwork']['front_default'];
	let id = await pokemon['id'];
	let names = await pokemon['name'];
	let color = await colors[poke_types];
	// console.log('color',color)

	poke_container.innerHTML += /*html*/`

			<div  onclick = "showImg(id)"  class="pokemon" id="${names}" style="background-color: rgb(50, 50, 50)" >
				<div style="color: ${color}"> 
					${names.toUpperCase()}
				<div >
			</div>
				
			<div>
				<img id="img" class="img" src=" ${img}">
			</div>

			<div style="color: ${color}"> 

				<span class="typeText"> Type - ${poke_types} </span>
			</div>
				<br>
				<span class="typeText">ID - ${id.toString().padStart(3, '0')}</span>
			</div> `;
}

//-----------------------------------------------------

function showImg() {
	let contain = document.getElementById('showPoco');
	contain.innerHTML = '';
	
	let poke_types =  pokemon['types'][0]['type']['name'][0].toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
	let img =  pokemon['sprites']['other']['official-artwork']['front_default'];
	let id =  pokemon['id'];
	let names =  pokemon['name'];
	let color =  colors[poke_types];


	contain.innerHTML = /*html*/` 

		<div class="slideContainer"  >
				<div style="color: ${color}"> 
					${names.toUpperCase()}
				</div>

				<div>
					<img id="img"  class="img2" src=" ${img}">
				</div>

				<div style="color: ${color}"> 
					<span class="typeText"> Type - ${poke_types} </span>
				</div>	

				<span class="typeText">ID - ${id.toString().padStart(3, '0')}</span>
		        <p onclick="backContent()" ><i class="bi bi-x-lg closeImg"></i></p>
	
		       
		        	<p onclick="rightImg(id)"><i class="bi bi-chevron-double-right rightImg"></i></p>
	            	<p onclick="leftImg(id)"><i class="bi bi-chevron-double-left leftImg"></i></p>
	          

	       </div> 
			`;

}

function backContent() {

	document.getElementById('showPoco').innerHTML = '';
	getPokemon();
}



function search() {

	let search = document.getElementById('fixed-header-drawer-exp').value;
	search = search.toLowerCase();

	// console.log(search); 

	for (let i = 0; i < allPokemon.length; i++) {
		let poko = allPokemon[i];

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











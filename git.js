
'use strict'


let poke_container = document.getElementById('poke_container');



let pokemon;
let allPokemon = [];
console.log('allPokemon', allPokemon);




let colors = {
	Fire: '#be4e44',
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
	Normal: '#7ed8cc'
};

let main_types = Object.keys(colors);
// console.log('main_types',main_types);



async function getPokemon() {

	for (let i = 1; i < 150; i++){
	let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
	let res = await fetch(url);
	pokemon = await res.json();
	allPokemon.push( await pokemon['name']);
	// console.log(pokemon)
	// console.log(' Type', pokemon['types'][0]['type']['name'])
	// console.log(pokemon['types'][0]['type']['name'][0])
	// console.log( pokemon['name'][0])
	// console.log('ID ', pokemon['id'])
	// console.log(' Name', pokemon['name'])

	createPokemonCard();
	
	}
};
// ---------------------------------------------




async function createPokemonCard(){

	let div = document.createElement('div');
	div.classList.add('pokemon')
	div.id = await pokemon['name'];
	div.setAttribute("onclick", "showImage(this.id)");
	console.log(div)
	

	
	let poke_types = await pokemon['types'][0]['type']['name'][0].toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
	let type =  main_types.find(type => poke_types.indexOf(type) > -1);
	let img = await pokemon['sprites']['other']['official-artwork']['front_default'];
	let id = await pokemon['id'];
	let name = await pokemon['name'].toUpperCase();
	let color = colors[type];

	div.style.backgroundColor = color;


	let poke_containerinnerHTML = /*html*/`


		<div 
			 > ${name} <br> 
			<div>
				<img id="img" class="img" src=" ${img}">
			</div>
				<span class="typeText"> Type - ${poke_types}</span>
				<br>
				<span class="typeText">ID - ${id.toString().padStart(3, '0')}</span>
		</div>
`;

poke_container.appendChild(div);
div.innerHTML = poke_containerinnerHTML;



}



 function search() {

	let search = document.getElementById('fixed-header-drawer-exp').value;
	search = search.toLowerCase(); 
	// console.log(search); 


	

	for( let i = 0; i < allPokemon.length; i++ ){
		let poko = allPokemon[i];
		
	 	if (poko.includes(search)) {
			document.getElementById(poko).style.display = 'block';
	 	} else {
			document.getElementById(poko).style.display = 'none';
		}
	}
}
		
	






function showImage(){

	let poke_container = document.getElementById('poke_container');
	div.id = await pokemon['name'];
	
		
	 	if (poko.includes(poke_container)) {
			document.getElementById(poko).style.display = 'block';
	 	} else {
			document.getElementById(poko).style.display = 'none';
		}
	


}




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// async function createPokemonCard(){
	
// 	let div = document.createElement('div');
// 	div.classList.add('pokemon')
// 	div.id = await pokemon['name'];
// 	div.setAttribute("onclick", "showImage(this.id)");
// 	console.log(div)
// 	div.

	
// 	let poke_types = await pokemon['types'][0]['type']['name'][0].toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
// 	let type =  main_types.find(type => poke_types.indexOf(type) > -1);
// 	let img = await pokemon['sprites']['other']['official-artwork']['front_default'];
// 	let id = await pokemon['id'];
// 	let name = await pokemon['name'].toUpperCase();
// 	let color = colors[type];

// 	div.style.backgroundColor = color;


// 	let poke_containerinnerHTML = /*html*/`


// 		<div 
// 			 > ${name} <br> 
// 			<div>
// 				<img id="img" class="img" src=" ${img}">
// 			</div>
// 				<span class="typeText"> Type - ${poke_types}</span>
// 				<br>
// 				<span class="typeText">ID - ${id.toString().padStart(3, '0')}</span>
// 		</div>
// `;

// poke_container.appendChild(div);
// div.innerHTML = poke_containerinnerHTML;



// }








// function showImage(x) {
// 	alert(x)
	
// 	let contain = document.getElementById('contain');


// 	let showImage = document.createElement('div'); 

// 	let container  = /*html*/`
	
	
	
// 			<div  class="slideContainer">
			
// 			<p onclick="backContent()" ><i class="bi bi-x-lg closeImg"></i></p>
// 				<img src="${name}" class="slideshow">
// 		<div >
				   
// 			<!-- <p onclick="rightImg(${i})"><i class="bi bi-chevron-double-right rightImg"></i></p>
// 			<p onclick="leftImg(${i})"><i class="bi bi-chevron-double-left leftImg"></i></p>
// 	 -->
// 					<h3 class="imgNumber bi">${i+1}</h3> 
// 			</div>
// 		</div>`;
		
// 		poke_container.appendChild(showImage);
// showImage.innerHTML = container;

	











// function contain(){
   
// 	document.getElementById('poke_container').innerHTML = '';
// 	createPokemonCard();
// }


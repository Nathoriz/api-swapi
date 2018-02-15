let button = document.querySelector('#button');
let name = document.querySelector('#name');
let height = document.querySelector('#height');
let mass = document.querySelector('#mass');
let birthYear = document.querySelector('#birth-year');

function getInfo(){
	let randomNumber = Math.floor((Math.random() * 88) + 1);
	let apiUrl = 'https://swapi.co/api/people/' + randomNumber;
	axios.get(apiUrl).then(function(response){
		updateInfo(response.data);
	}).catch(e => {
		updateInfoWithError();
	})
}

function updateInfo(data){
	name.innerText = data.name;
	height.innerText = `Height: ${data.height}`;
	mass.innerText = `Mass: ${data.mass}`;
	birthYear.innerText = `Birth Year: ${data.birth_year}`;
}

function updateInfoWithError(){
	name.innerText = 'Oh no! That person is not avaible.';
	height.innerText = '';
	mass.innerText = '';
	birthYear.innerText = '';
}

button.addEventListener('click', getInfo);
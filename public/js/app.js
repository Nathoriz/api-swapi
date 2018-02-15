const form = document.getElementById('search-form');
const inputSearch = document.getElementById('keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = inputSearch.value;
  getCharacter();
})

function getCharacter() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://swapi.co/api/people/?search=` + searchedForText);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  const data = JSON.parse(this.responseText);
  const result = data.results;

  result.forEach(function (re) {
    console.log(re);
    const name = re.name;

    let div = document.createElement('div');
    div.className = 'col-sm-4';
    div.setAttribute('id', '1'); 
    div.style.backgroundImage = "url('../assets/images/characters/" + name + ".jpg')";
    div.style.backgroundPosition = 'center center';
    div.style.backgroundRepeat = 'no repeat';
    div.style.backgroundSize = 'cover';
    div.style.height = '25vh';

    responseContainer.appendChild(div);
    console.log(data);
    console.log(result);
    console.log(name);
  })

}






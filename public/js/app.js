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
    const height = re.height;
    const mass = re.mass;
    const eyesColor = re.eye_color;
    const hairColor = re.hair_color;
    const gender = re.gender;
    const homeworld = re.homeworl;


    let div = document.createElement('div');
    div.className = 'col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4 mr-5 ml-5';
    div.setAttribute('data-name', name); 
    div.style.backgroundImage = "url('../assets/images/characters/" + name + ".jpg')";
    div.style.backgroundPosition = 'center center';
    div.style.backgroundRepeat = 'no repeat';
    div.style.backgroundSize = 'cover';
    div.style.height = '60vh';

    responseContainer.appendChild(div);
    // console.log(data);
    // console.log(result);
    // console.log(name);

    console.log(homeworld);

    div.addEventListener('click', function() {
      if(this.dataset.name === name) {
        this.setAttribute('data-toggle', 'modal');
        this.setAttribute('data-target', '#exampleModal');

        let title = document.getElementById('title');
        title.innerText = name;

        let elementHeight = document.getElementById('height');
        elementHeight.innerText = height;

        let elementMass = document.getElementById('mass');
        elementMass.innerText = mass;

        let elementEyesColor = document.getElementById('eyesColor');
        elementEyesColor.innerText = eyesColor;

        let elementHairColor = document.getElementById('hairColor');
        elementHairColor.innerText = hairColor;

        let elementGender = document.getElementById('gender');
        elementGender.innerText = gender;

        let elementHomeworld = document.getElementById('homeworld');
        elementHomeworld.innerText = homeworld;

      }
    })
  })

}






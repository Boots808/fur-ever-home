/*var dogBreeds = document.getElementById("dog-search")
var dogInput = document.getElementById("dog-input")
var dogInfo = document.getElementById("dog-information")
var oImg = document.createElement("img")




function getDogInfo(){
	
	let dog = dogBreeds.value
	let dogInfoDiv = document.createElement('div')
console.log(dog)

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c2e0789a8bmshe420e2ebff8e5b9p1b89a1jsn65f0fb090ec1',
			'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
		}
	};
	
	fetch(`https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${dog}`, options)
	
		.then(response => response.json())
		.then(data =>{
			console.log(data)
			 dogInfo.innerText = data[0].breed
            
        }
			)
        
		.catch(err => console.error(err));
}*/
console.log("Doge")

const BASE_API_URL = 'https://api.thedogapi.com/v1'

const fetchDogeBreeds = async () => {

   const response = await fetch('https://api.thedogapi.com/v1/breeds');
   const dogBreeds = await response.json();
   populateDoge(dogBreeds);
}

const populateDoge = (breeds) => {
    const select = document.querySelector('.breed-select');
    const breedOptions = breeds.map(breed =>{
        const option = document.createElement('option');
        option.text = breed.name;
       option.value = breed.id;
       return option;
    })

    breedOptions.forEach(breedOption => {
        select.appendChild(breedOption);

    
    })
}
const fillDogeImage = (imageUrl) => {
    document.querySelector('#Doge-Image').setAttribute('src', imageUrl)
}

const getDogeByBreed = async (breedId) => {

const [ data ] = await fetch (BASE_API_URL + '/images/search?include_breed=1&breed_id=' + breedId ).then((data) => data.json())
const {url: imageUrl, breeds} = data;
fillDogeImage(imageUrl);
}
const changeDoge = () => {
    console.log(event.target.value);
    getDogeByBreed(event.target.value);
}

fetchDogeBreeds();
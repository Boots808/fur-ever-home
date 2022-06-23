
console.log("Doge")

// Base API link
const BASE_API_URL = 'https://api.thedogapi.com/v1'

const fetchDogeBreeds = async () => {

   const response = await fetch('https://api.thedogapi.com/v1/breeds');
   const dogBreeds = await response.json();
   populateDoge(dogBreeds);
}
// Breed selection from dropdown
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
// Populated image for breeds
const fillDogeImage = (imageUrl) => {
    document.querySelector('#Doge-Image').setAttribute('src', imageUrl)
}

// Description Entry
const createDescriptionEntry = ({label, value}) => {
    const descriptionTerm = document.createElement('dt');
    descriptionTerm.textContent = label;
    const descriptionValue = document.createElement('dd');
    descriptionValue.textContent = value;
    const parentElement = document.querySelector('#doge-description');
    parentElement.appendChild(descriptionTerm);
    parentElement.appendChild(descriptionValue);

}
// clear description section to post next one
const clearDogeDescription = () => {
    const descriptionElement = document.querySelector(
        '#doge-description'
    )
    while(descriptionElement.firstChild){
        descriptionElement.removeChild(descriptionElement.firstChild)
    }
}
// description section
const fillDogeDescription = ({bred_for, breed_group, name, temperament, life_span, origin, height, weight }) => {
    clearDogeDescription();
    // clear doge ending
// descriptions
    createDescriptionEntry({
    label: 'Name',
    value: name
})
createDescriptionEntry({
    label:'Bred for',
    value: bred_for
})
createDescriptionEntry({
    label: 'Breed Group',
    value: breed_group
})
createDescriptionEntry({
    label:'Temperement',
    value: temperament
})
createDescriptionEntry({
    label:'Life Span',
    value: life_span
})
createDescriptionEntry({
   label:'Origin',
   value: origin
})
createDescriptionEntry({
    label:'Height [Inches]',
    value: height.imperial
})
createDescriptionEntry({
    label:'Weight [Lbs]',
    value: weight.imperial
})
}

const getDogeByBreed = async (breedId) => {

    // Loading Element
    const loadingElement = document.querySelector('.loading');
     loadingElement.classList.add('show-loading');

    //  Posting the proper image
const [ data ] = await fetch (BASE_API_URL + '/images/search?include_breed=1&breed_id=' + breedId ).then((data) => data.json())
const {url: imageUrl, breeds} = data;
fillDogeImage(imageUrl);
fillDogeDescription(breeds[0]);

// Removing Load Element
loadingElement.classList.remove('show-loading');
}

const changeDoggo = () => {
    console.log(event.target.value);
    getDogeByBreed(event.target.value);
}

fetchDogeBreeds();

var emailInputClick = document.querySelector("emailSubmit");

emailInputClick.addEventlistener ("click",);
window.alert('Thank you for Subscribing to our newsletter!');
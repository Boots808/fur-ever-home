function adoptAPI(breed, origin, url, img ) {
    'X-RapidAPI-Key': 'c2e0789a8bmshe420e2ebff8e5b9p1b89a1jsn65f0fb090ec1',
    'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
}

fetch(`https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${dog}`, options)
	
.then(response => response.json())
.then(data =>{
    console.log(data)
     dogInfo.innerText = data[0].breed
}
    )

.catch(err => console.error(err));
}
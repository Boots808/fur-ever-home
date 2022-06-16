const dogBtn = document.getElementById("dog-btn");



async function getDog(){
    let resp = await fetch("https://dog.ceo/api/breeds/image/random");
    let data =  await resp.json();
    showdata(data.message);
}
getDog();

function showdata(dogimage){
    document.getElementById("dog").innerHTML = `
    <img src="${dogimage}" alt="">
    `
}


dogBtn.addEventListener("click",()=>{
getDog();
});
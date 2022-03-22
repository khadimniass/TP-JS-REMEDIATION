const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const API_LOCAL = "APIURL.json";

const container = document.querySelector('.container');
const form = document.querySelector('form');
const recherche = document.querySelector('#src');

// let backdrop_path = [];
// let poster_path = [];
convertirUrl(APIURL);
function convertirUrl(url){
fetch(url)
  .then((data) => data.json())
  .then((tab) => {
        movies(tab['results']);
  });
}
  function movies(tab) {
    tab.forEach((item) => {
        const divItem = document.createElement("div");
        divItem.className = "item";
        const img = document.createElement("img");
        img.src = IMGPATH + item.poster_path;
        const divInfo = document.createElement("div");
        divInfo.className = "info";
        const h2 = document.createElement("h2");
        h2.innerHTML = item.title;
        const span = document.createElement('span');
        span.className = "vert";
        span.innerHTML = item.vote_average;
        const divView = document.createElement('div');
        divView.className = "view";
        const h3 = document.createElement('h3');
        h3.innerHTML = "overview";
        const p = document.createElement('p');
        p.innerHTML = item.overview;
        
        divInfo.appendChild(h2);
        divInfo.appendChild(span);
       
        divView.appendChild(h3);
        divView.appendChild(p)
       
        divItem.appendChild(img);
        divItem.appendChild(divInfo);
        divItem.appendChild(divView);
        container.appendChild(divItem);
      });
  }

form.addEventListener('submit', e=>{
    e.preventDefault();

    const filmRecher= recherche.value;
    const fullUrlSarch = SEARCHAPI + filmRecher;
    // console.log(filmRecher);
    
    if (filmRecher) {
        convertirUrl(fullUrlSarch);
    // }else{
    //     convertirUrl(APIURL);
    }
})
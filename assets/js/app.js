
// console.log(results.length);

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

let moviePoster = document.getElementById("moviePoster");
let seacrhInput = document.getElementById("search");

//  functions 
// main html body
function htmlBody(arr){
    let final = '';
    arr.forEach(ele => {
        final += `<div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <figure class="posters">
                                <img src= "${IMG_PATH}${ele.poster_path}" class="img-fluid" alt="${ele.title}">
                                <figcaption>
                                    <p class="title">${ele.title}</p>
                                </figcaption>
                                <span class="${colors(ele.vote_average)}">${ele.vote_average}</span>
                                <div class="overview text-center">
                                    <h4>Overview</h4>
                                    <p class="">${ele.overview}</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>`
    });
    
    moviePoster.innerHTML = final;
}
htmlBody(results);

//  callback function for 'keyUp' event
function onEnter(e){
    if(e.key === "Enter"){
        // console.log("event triggered.");
        let name = e.target.value.toLowerCase().trim();
        // console.log(name);
        let tempResult = results.filter(movie => movie.title.toLowerCase().trim().includes(name));
        htmlBody(tempResult);
    }else{
        htmlBody(results);
    }
}


// to give color range for ratings

function colors(rating){
    if(rating >= 8){
        return "green"
    }else if(rating >= 6){
        return "yellow"
    }else if( rating >= 4){
        return "orange"
    }else{
        return "red"
    }
}

//  events

seacrhInput.addEventListener("keyup", onEnter);
const apiKey = "9e7d89b7";
let searchForm = document.getElementById("searchForm");
const posterElement = document.getElementById("poster");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const plotElement = document.getElementById("plot");
const genreElement = document.getElementById("genre");
const runtimeElement = document.getElementById("runtime");
const yearElement = document.getElementById("year");
const actorsElement = document.getElementById("actors");
const countryElement = document.getElementById("country");
const languageElement = document.getElementById("language");
const metascoreElement = document.getElementById("metascore");

searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    let movieName = document.getElementById("movieName");
    fetch(`https://www.omdbapi.com/?t=${movieName.value}&apikey=${apiKey}`)
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => {
            console.log(data);
            if(data.Response === "True"){
                titleElement.textContent = `Título: ${data.Title}`;
                yearElement.textContent = `Año: ${data.Year}`;
                directorElement.textContent = `Director: ${data.Director}`;
                actorsElement.textContent = `Actores: ${data.Actors}`;
                plotElement.textContent = `Descripción: ${data.Plot}`;
                genreElement.textContent = `Género: ${data.Genre}`;
                runtimeElement.textContent = `Duración: ${data.Runtime}`;
                countryElement.textContent = `País: ${data.Country}`;
                languageElement.textContent = `Idioma: ${data.Language}`;
                metascoreElement.textContent = `Metascore: ${data.Metascore}`;
                posterElement.src = data.Poster;
            }
            else{
                vaciarDatos({title:"Pelicula no encontrada"});
            }
        })
        .catch(error => console.error("Hubo un error:", error));
})


    // let movieName = document.getElementById("movieName");
    // fetch(`https://www.omdbapi.com/?t=speed racer&apikey=${apiKey}`)
    //     .then(response => response.json()) // Convertimos la respuesta a JSON
    //     .then(data => {
    //         console.log(data);
    //         if(data.Response === "True"){
    //             titleElement.textContent = `Título: ${data.Title}`;
    //             yearElement.textContent = `Año: ${data.Year}`;
    //             directorElement.textContent = `Director: ${data.Director}`;
    //             actorsElement.textContent = `Actores: ${data.Actors}`;
    //             plotElement.textContent = `Descripción: ${data.Plot}`;
    //             genreElement.textContent = `Género: ${data.Genre}`;
    //             runtimeElement.textContent = `Duración: ${data.Runtime}`;
    //             countryElement.textContent = `País: ${data.Country}`;
    //             languageElement.textContent = `Idioma: ${data.Language}`;
    //             metascoreElement.textContent = `Metascore: ${data.Metascore}`;
    //             posterElement.src = data.Poster;
    //         }
    //         else{
    //             vaciarDatos({title:"Pelicula no encontrada"});
    //         }
    //     })
    //     .catch(error => console.error("Hubo un error:", error));



function vaciarDatos({ 
    title = "", year = "", director = "", actors = "", 
    plot = "", genre = "", runtime = "", country = "", 
    language = "", metascore = "", poster = "" 
}) {
    titleElement.textContent = title;
    yearElement.textContent = year;
    directorElement.textContent = director;
    actorsElement.textContent = actors;
    plotElement.textContent = plot;
    genreElement.textContent = genre;
    runtimeElement.textContent = runtime;
    countryElement.textContent = country;
    languageElement.textContent = language;
    metascoreElement.textContent = metascore;
    posterElement.src = poster;
}
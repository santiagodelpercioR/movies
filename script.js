const apiKey = "9e7d89b7";
const movieName = document.getElementById("movieName");
const searchbutton = document.getElementById("searchbutton");
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

searchbutton.addEventListener("click", function(){
    let movieTitle = movieName.value;
    fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
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
                posterElement.src = "";
            }
        })
        .catch(error => console.error("Hubo un error:", error));
})


   /* let movieTitle = movieName.value;
    fetch(`https://www.omdbapi.com/?t=inception&apikey=${apiKey}`)
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
                posterElement.src = "";
            }
        })
        .catch(error => console.error("Hubo un error:", error));*/

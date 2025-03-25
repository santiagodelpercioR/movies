const apiKey = "9e7d89b7";
const movieName = document.getElementById("movieName");
const searchbutton = document.getElementById("searchbutton");
const posterElement = document.getElementById("poster");

searchbutton.addEventListener("click", function(){
    let movieTitle = movieName.value;
    fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
        .then(response => response.json()) // Convertimos la respuesta a JSON
        .then(data => {
            console.log(data);
            if(data.Response === "True"){
                posterElement.src = data.Poster;
            }
            else{
                posterElement.src = "";
            }
        })
        .catch(error => console.error("Hubo un error:", error));
})

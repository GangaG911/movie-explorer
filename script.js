async function searchMovies() {
    let query = document.getElementById("search").value.trim();

    if (!query) {
        alert("Enter movie name");
        return;
    }

    let url = `https://www.omdbapi.com/?s=${query}&apikey=387016e5`;

    let res = await fetch(url);
    let data = await res.json();

    let moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    if (data.Response === "True") {
        data.Search.forEach(movie => {
            moviesDiv.innerHTML += `
                <div class="movie">
                    <img src="${movie.Poster}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            `;
        });
    } else {
        moviesDiv.innerHTML = `<p>${data.Error}</p>`;
    }
}
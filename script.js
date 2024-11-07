// TMDb API Bearer token
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWE1NTRiNDg1MThmNjI3YmMwNWJlMzExNWI1ZmZlYSIsIm5iZiI6MTczMDkxMDY5Ni44Mjc1MjA0LCJzdWIiOiI2NzJiOTczNTFlOGRjZWM0YTYyYjhlZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MmRbvgRt6-8n8GuyoJtlE9eVl3nlZwu04wCW_l2m-mc';

// Function to fetch the top movie for a specific year
function getTopMovieForYear() {
    // Get the year from the input field
    const year = document.getElementById('yearInput').value.trim();

    // Validate the input to ensure a year is provided
    if (!year) {
        document.getElementById('movieDetails').innerText = "Please enter a valid year.";
        return;
    }

    // Construct the TMDb API URL with the specified year
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=popularity.desc&include_adult=false&language=en-US&page=1`;

    // Make the API call using fetch with the access token
    fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Check if there are any movies in the results
        if (data.results && data.results.length > 0) {
            const topMovie = data.results[0]; // The most popular movie for that year

            // Display the movie details
            displayMovieDetails(topMovie);
            // Display the movie poster
            displayPoster(topMovie.poster_path);
        } else {
            document.getElementById('movieDetails').innerText = `No popular movies found for ${year}.`;
        }
    })
    .catch(error => {
        document.getElementById('movieDetails').innerText = "Error fetching movie data. Try again later.";
        console.error("Fetch Error:", error);
    });
}

// Function to display movie details
function displayMovieDetails(movie) {
    const movieDetailsDiv = document.getElementById('movieDetails');
    movieDetailsDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Overview:</strong> ${movie.overview}</p>
    `;
}

// Function to display movie poster
function displayPoster(posterPath) {
    const posterImg = document.getElementById('poster');
    const posterUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'default-image.jpg';
    posterImg.src = posterUrl;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top Movie by Year</title>
</head>
<body>
    <h1>Find the Top Movie by Year</h1>

    <!-- Input for year -->
    <label for="yearInput">Enter a Year:</label>
    <input type="number" id="yearInput" placeholder="e.g., 2024"><br><br>
    <button onclick="fetchTopMovie()">Get Top Movie</button>

    <!-- Display area for movie details -->
    <div id="movieDetails"></div>
    <img id="poster" alt="Movie Poster" style="width:200px; height:auto;">

    <!-- Script for handling the fetch request -->
    <script>
        async function fetchTopMovie() {
            // Get the input year from the user
            const year = document.getElementById('yearInput').value;
            
            if (!year) {
                document.getElementById('movieDetails').innerText = "Please enter a valid year.";
                return;
            }

            try {
                // Call the local Node.js server to get the top movie for the entered year
                const response = await fetch(`http://localhost:3000/movie?year=${year}`);
                const data = await response.json();

                if (data.error) {
                    document.getElementById('movieDetails').innerText = data.error;
                } else {
                    // Display the movie details
                    document.getElementById('movieDetails').innerHTML = `
                        <h2>${data.title}</h2>
                        <p><strong>Release Date:</strong> ${data.release_date}</p>
                        <p><strong>Overview:</strong> ${data.overview}</p>
                    `;
                    document.getElementById('poster').src = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : 'default-image.jpg';
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
                document.getElementById('movieDetails').innerText = "Error fetching movie data. Try again later.";
            }
        }
    </script>
</body>
</html>

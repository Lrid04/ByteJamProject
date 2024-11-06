const express = require('express');
const app = express();
const PORT = 3000;

const accessToken = 'YOUR_TMDB_ACCESS_TOKEN';

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/movie', async (req, res) => {
    const year = req.query.year;
    const url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=popularity.desc&include_adult=false&language=en-US&page=1`;

    try {
        const response = await fetch(url, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        const topMovie = data.results[0];

        if (topMovie) {
            res.json({
                title: topMovie.title,
                release_date: topMovie.release_date,
                overview: topMovie.overview,
                poster_path: topMovie.poster_path
            });
        } else {
            res.json({ error: `No popular movies found for the year ${year}.` });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch movie data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

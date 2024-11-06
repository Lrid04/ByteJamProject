const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/movie', async (req, res) => {
  const year = req.query.year;
  const url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=popularity.desc&include_adult=false&language=en-US&page=1`;

  try {
    const apiResponse = await fetch(url, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer YOUR_ACCESS_TOKEN`
      }
    });
    const data = await apiResponse.json();
    res.json(data.results[0] || { error: `No movies found for year ${year}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

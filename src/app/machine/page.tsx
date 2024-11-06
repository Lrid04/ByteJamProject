import { useState } from 'react';

export default function Machine() {
    const [year, setYear] = useState('');
    const [movie, setMovie] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFetchMovie = async () => {
        if (!year.trim()) {
            setError('Please enter a valid year.');
            return;
        }
        
        try {
            const response = await fetch(`/movie?year=${year}`);
            const data = await response.json();
            
            if (data.error) {
                setError(data.error);
                setMovie(null);
            } else {
                setMovie(data);
                setError(null);
            }
        } catch (err) {
            setError('Error fetching movie data. Try again later.');
            console.error('Fetch Error:', err);
        }
    };

    return (
        <div>
            <h1>Find the Top Movie by Year</h1>

            <label htmlFor="yearInput">Enter a Year:</label>
            <input
                type="number"
                id="yearInput"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g., 2024"
            />
            <br /><br />
            <button onClick={handleFetchMovie}>Get Top Movie</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {movie && (
                <div id="movieDetails">
                    <h2>{movie.title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    <img
                        id="poster"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default-image.jpg'}
                        alt="Movie Poster"
                        style={{ width: '200px', height: 'auto' }}
                    />
                </div>
            )}
        </div>
    );
}

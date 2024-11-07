'use client';
import { useState } from 'react';
import NavBar from '../ui/navbar';
import PhoneKeypad from '../ui/remote'; 



export default function MovieFetcher() {
    const [year, setYear] = useState('');
    const [movie, setMovie] = useState<null | {
        title: string;
        release_date: string;
        overview: string;
        poster_path: string;
    }>(null);
    const [error, setError] = useState('');

    // Function to fetch the top movie for the given year
    async function handleFetchMovie() {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=vote_count.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWE1NTRiNDg1MThmNjI3YmMwNWJlMzExNWI1ZmZlYSIsIm5iZiI6MTczMDkxMDY5Ni44Mjc1MjA0LCJzdWIiOiI2NzJiOTczNTFlOGRjZWM0YTYyYjhlZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MmRbvgRt6-8n8GuyoJtlE9eVl3nlZwu04wCW_l2m-mc'
            }   
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setMovie(json.results[0]);
        })
        .catch(err => setError(err));
    }

    const handleKeypadInput = (value: string) => {
        if (value === "<-") {
            setYear(year.slice(0, -1)); // Backspace functionality
        } else {
            setYear(year + value);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <NavBar />
            <h1>Find the Top Movie by Year</h1>

            {/* Keypad for entering year */}
            <PhoneKeypad onInput={handleKeypadInput} />

            {/* Fetch movie button */}
            <button onClick={handleFetchMovie} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Get Top Movie
            </button>

            {/* Error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Movie details */}
            {movie && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{movie.title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    {movie.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

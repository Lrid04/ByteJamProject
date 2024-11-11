'use client';
import { useState } from 'react';
import NavBar from '../ui/navbar';
import Remote from '../ui/remote'; 
import TV from '../ui/tv'
import Frame from '../ui/frame'

export default function MovieFetcher() {
    const [inputValue, setInputValue] = useState('');
    const [movie, setMovie] = useState<null | {
        title: string;
        release_date: string;
        overview: string;
        poster_path: string;
    }>(null);
    const [error, setError] = useState('');

    // Function to fetch the top movie for the given year
    async function handleFetchMovie() {
        console.log(inputValue) 
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${inputValue}&sort_by=vote_count.desc`;
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


    function setValue(value:string){
        setInputValue(value)
    }
    return (
        <main className="bg-[url('/room.png')] bg-cover bg-no-repeat min-h-screen" >
            <NavBar />
            <h1 className="text-xl font-bold text-center">Find the Top Movie by Year</h1>

            
            <div className='flex flex-row align-end'>
                <TV />
                <div>
                <Frame />
                    <Remote setValue= {setValue} remoteValue = {inputValue}/>
                    <button 
                        onClick={handleFetchMovie} 
                        className="mt-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                    Get Top Movie
                    </button>
                </div>
            </div>
            
            

            {/* Error message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Movie details */}
            {movie && (
                <div className="mt-5">
                    <h2 className="text-lg font-semibold">{movie.title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    {movie.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto mt-2"
                        />
                    )}
                </div>
            )}
        </main>
    );
}
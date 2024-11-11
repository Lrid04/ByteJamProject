'use client';
import { useState } from 'react';
import NavBar from '../ui/navbar';
import Remote from '../ui/remote'; 
import TV from '../ui/tv'
import Frame from '../ui/frame'


export default function Machine() {
    type Movie = {
        title: string;
        release_date: string;
        overview: string;
        poster_path: string;
    }

    const [inputValue, setInputValue] = useState('');
    const [movie, setMovie] = useState<null | Movie>();
    const [error, setError] = useState('');
    const [timeValue, setTimeValue] = useState('');

    // Function to fetch the top movie for the given year
    async function handleFetchMovie() {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${inputValue}&sort_by=vote_count.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWE1NTRiNDg1MThmNjI3YmMwNWJlMzExNWI1ZmZlYSIsIm5iZiI6MTczMDkxMDY5Ni44Mjc1MjA0LCJzdWIiOiI2NzJiOTczNTFlOGRjZWM0YTYyYjhlZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MmRbvgRt6-8n8GuyoJtlE9eVl3nlZwu04wCW_l2m-mc'
            }   
        };
        setTimeValue(inputValue + "\n" + timeValue)
        console.log(timeValue)
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
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
            <div className='flex flex-row items-end space-y-2'>
                <TV movie={movie} />
                <div className='flex flex-col mb-[20%] mt-[20%] self-start mr-[20%]'>
                    <Frame timeInput={timeValue}/>
                    <Remote setValue= {setValue} remoteValue = {inputValue} handleFetchMovie={handleFetchMovie}/>
                    
                </div>
            </div>
            {/* Error message */}
            {error && <p className="text-red-500">{error}</p>}
        </main>
    );
}
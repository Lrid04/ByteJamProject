import Image from "next/image"
import Movie from "../page"

type Movie = {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

export default function Tv(movie: Movie | any) {
    if (movie.movie != undefined){
        return (
            <main className='bg-[url("/tv.png")] bg-contain bg-no-repeat h-screen grow'>
                <p className="" >{movie.movie.title}</p>
                <div className="max-h-[8.5%] max-w-[6.5%] mt-[15%] ml-[20.9%]">
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
                    alt={"Movie Poster"}
                    className=""
                    />
                </div>
                
            </main>
            );
    }
    else{
        return (
            <main className='bg-[url("/tv.png")] bg-contain bg-no-repeat h-screen grow'>
                <p className="" ></p>
                <img
                    alt={""}
                    className="object-scale-down"
                    />
            </main>
            );
    }
    
    }
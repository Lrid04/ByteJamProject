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
                <p className="text-gray-900 pl-[23.5%] pt-[6.5%]" >{movie.movie.title}</p>
                <div className="h-20 w-20 mt-[16%] ml-[29.5%]">
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
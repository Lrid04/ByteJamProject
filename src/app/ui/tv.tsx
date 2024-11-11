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
        console.log(movie.movie.poster_path)
        return (
            <main className='bg-[url("/tv.png")] bg-contain bg-no-repeat max-h-screen grow max-w-[50%] mt-auto'>
                <p className="" >{movie.movie.title}</p>
                <div className="h-20 w-20">
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
                    alt={"Movie Poster"}
                    className="object-scale-down"
                    />
                </div>
                
            </main>
            );
    }
    else{
        return (
            <main className='bg-[url("/tv.png")] bg-contain bg-no-repeat h-screen grow'>
                <p className="" ></p>
                <Image 
                src={"/#"}
                alt={"Movie Poster"}
                width={100}
                height={100}
                className=""
                />
            </main>
            );
    }
    
    }
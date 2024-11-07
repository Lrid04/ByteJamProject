import Image from "next/image"
export default function Tv() {
    return (
      <main className="bg-[url('/tv.png')] bg-cover bg-no-repeat h-full w-full">
        <div>
            <p>Word</p>
            <Image 
            src={"/#"}
            alt={"Movie Poster"}
            width={100}
            height={100}/>
        </div>
      </main>
    );
  } 
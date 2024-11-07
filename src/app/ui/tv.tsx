import Image from "next/image"
export default function Tv() {
    return (
      <main className='bg-[url("/tv.png")] bg-contain bg-no-repeat h-screen grow'>
        <p className="pt-14 pl-64">Word</p>
        <Image 
        src={"/#"}
        alt={"Movie Poster"}
        width={100}
        height={100}
        className="pt-24 pl-24"
        />
      </main>
    );
  } 
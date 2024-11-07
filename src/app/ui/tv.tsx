import Image from "next/image"
export default function Tv() {
    return (
      <main className='bg-[url("/tv.png")] bg-contain bg-no-repeat h-screen'>
        <p className="">Word</p>
        <Image 
        src={"/#"}
        alt={"Movie Poster"}
        width={100}
        height={100}/>
      </main>
    );
  } 
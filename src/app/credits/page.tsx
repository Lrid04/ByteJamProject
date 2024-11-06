import Image from "next/image";
import NavBar from "../ui/navbar"

export default function Credits() {
  return ( 
    <main>
      <NavBar />
      <div className="flex justify-around grid grid-col-4 grid-rows-3 grid-flow-col gap-4 text-center">
        <h1 className="col-span-3 content-center text-5xl">Thank you for all of our developers!</h1>
        <div className="w-60 border-2">
          <h1>Jaxon</h1>
          <Image src={""} alt="Jaxon" className="h-52 "/>
          <p className="">"I am greatful to be a part of this team"</p>
        </div>
        <div className="w-60 border-2">
          <h1>Landon</h1>
          <Image src={""} alt="Landon" className="h-52 "/>
          <p>...</p>
        </div>
        <div className="w-60 border-2">
          <h1>Guyvani</h1>
          <Image src={""} alt="Guyvani" className="h-52"/>
          <p>...</p>
        </div>
        <div className="w-60 border-2">
          <h1>daniel</h1>
          <Image src={""} alt="daniel" className="h-52"/>
          <p>...</p>
        </div>
        <div className="w-60 border-2">
          <h1>Nixon</h1>
          <Image src={""} alt="Nixon" className="h-52"/>
          <p>...</p>
        </div>
        <div className="w-60 border-2">
          <h1>#</h1>
          <Image src={""} alt="#" className="h-52"/>
          <p>...</p>
        </div>
      </div>
    </main>
  );
}
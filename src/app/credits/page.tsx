import Image from "next/image";
import NavBar from "../ui/navbar"

export default function Credits() {
  return ( 
    <main>
      <NavBar />
      <div className="flex justify-around grid grid-col-4 grid-rows-3 grid-flow-col gap-4 text-center">
        <h1 className="col-span-3 content-center text-5xl">Thank you for all of our developers!</h1>
        <div className="w-60 border-2 h-fit">
          <h1>Jaxon</h1>
          <Image src={"/Jaxon.jpg"} alt="Jaxon" className="" width={236} height={100}/>
          <p className="">"I am greatful to be a part of this team"</p>
        </div>
        <div className="w-60 border-2 h-fit">
          <h1>Landon</h1>
          <Image src={"/Landon.jpg"} alt="Nixon" className="" width={236} height={100}/>
          <p>...</p>
        </div>
        <div className="w-60 border-2 h-fit">
          <h1>Guyvani</h1>
          <Image src={""} alt="Guyvani" className="" width={236} height={100}/>
          <p>...</p>
        </div>
        <div className="w-60 border-2 h-fit">
          <h1>daniel</h1>
          <Image src={""} alt="daniel" className="" width={236} height={100}/>
          <p>...</p>
        </div>
        <div className="w-60 border-2 h-fit">
          <h1>Nixon</h1>
          <Image src={"/Nixon.JPG"} alt="Nixon" className="" width={236} height={100}/>
          <p>...</p>
        </div>
        <div className="w-60 border-2 h-fit">
          <h1>Meghan</h1>
          <Image src={"/Meghan.jpg"} alt="#" className="" width={236} height={100}/>
          <p>...</p>
        </div>
      </div>
    </main>
  );
}
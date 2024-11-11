import Image from "next/image";
import NavBar from "../ui/navbar";

export default function Credits() {
  return ( 
    <main>
      <NavBar />
      <div className="flex justify-around grid grid-col-4 grid-rows-3 grid-flow-col gap-4 text-center">
        <h1 className="col-span-3 content-center text-5xl">Thank you to all of our developers!</h1>
        
        <div className="w-60 glowing-border h-fit p-4">
          <h1>Jaxon</h1>
          <Image src={"/Jaxon.jpg"} alt="Jaxon" width={236} height={100}/>
          <p>"I am grateful to be a part of this team"</p>
        </div>
        
        <div className="w-60 glowing-border h-fit p-4">
          <h1>Landon</h1>
          <Image src={"/Landon.jpg"} alt="Landon" width={236} height={100}/>
          <p>"Leading may be hard, but also very rewarding"</p>
        </div>

        <div className="w-60 glowing-border h-fit p-4">
          <h1>Guyvani</h1>
          <Image src={"/Guyvanii.png"} alt="Guyvani" width={236} height={100}/>
          <p>"Working with this team is really a moment to evolve and learn and become a family"</p>
        </div>
        
        <div className="w-60 glowing-border h-fit p-4">
          <h1>Daniel</h1>
          <Image src={"/Daniel.jpeg"} alt="Daniel" width={236} height={100}/>
          <p>"I am grateful for this experience, and this team"</p>
        </div>
        
        <div className="w-60 glowing-border h-fit p-4">
          <h1>Nixon</h1>
          <Image src={"/Nixon.JPG"} alt="Nixon" width={236} height={100}/>
          <p>"It's fun working with everyone, very enjoyable"</p>
        </div>
        
        <div className="w-60 glowing-border h-fit p-4">
          <h1>Meghan</h1>
          <Image src={"/Meghan.jpg"} alt="Meghan" width={236} height={100}/>
          <p>"I’m thrilled to dive into the React framework for my JavaScript project in Visual Studio! Collaborating with my team using Node and Git to bring our webpage to life!"</p>
        </div>
      </div>
    </main>
  );
}

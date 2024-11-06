import Image from "next/image";

export default function Credits() {
    return ( 
      <div className="grid grid-col-4 grid-rows-3 grid-flow-col gap-4">
        <h1 className="col-span-3" >Thank you for all of our developers!</h1>
          <div className="">
            <h1>Jaxon</h1>
            <Image src={""} alt="Jaxon"/>
            <p>"I am greatful to be a part of this team"</p>
          </div>
          <div className="">
            <h1>Landon</h1>
             <Image src={""} alt="Landon"/>
            <p>...</p>
          </div>
          <div className="">
            <h1>Guyvani</h1>
            <Image src={""} alt="Guyvani" className=""/>
            <p>...</p>
          </div>
          <div className="">
            <h1>daniel</h1>
            <Image src={""} alt="daniel"/>
            <p>...</p>
          </div>
          <div className="">
            <h1>Nixon</h1>
            <Image src={""} alt="Nixon"/>
            <p>...</p>
          </div>
          <div className="">
            <h1>#</h1>
            <Image src={""} alt="#"/>
            <p>...</p>
          </div>
      </div>
    );
  }
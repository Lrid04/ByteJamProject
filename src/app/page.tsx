import Image from "next/image";
import NavBar from "./ui/navbar"
export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="text-5xl text-center m-20 italic font-bold">
        <p className="m-20">
        Exhausted from work, you collapsed into your armchair and 
        fumbled with a lamp. When you turned back, you jumped 
        in surprise at the sight of a boxy TV in your living 
        room—that thing everybody had started to buy, boxes with 
        screens that could display an image, something you thought
         was too expensive at $100. Curious, you picked up the 
         remote and sat down. 
          <br />
          <br />
          You pressed the button.
        </p>
      </div>
    </main>
  );
}
import Link from 'next/link';

export default function NavBar() {
    return (
      <nav className="bg-gray-800 p-1 text-slate-400 ">
        <div className="flex justify-end flex space-x-2">
        <h1 className="text-xl font-bold text-white mb-4 w-full">My Website</h1>
        <Link href="/Home" className="underline">Home</Link>
        <Link href="/Machine" className="underline">Machine</Link>
        <Link href="/Credits"className="underline">Credits</Link>
        </div>
      </nav>
    );
  } 
  

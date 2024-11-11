import Link from 'next/link';

export default function NavBar() {
    return (
      <nav className="bg-gray-800 p-4 text-slate-400">
        <div className="flex justify-between items-center space-x-4">
          <h1 className="text-xl font-bold text-white mb-4 transform hover:scale-110 transition-all duration-300 pulse-animation">
            <Link href="/">
              My Website
            </Link>
          </h1>
          <div className="flex space-x-4">
            <Link href="/" className="underline hover:text-red-500 active:text-red-500 transform hover:translate-y-1 transition-all duration-150">
              Home
            </Link>
            <Link href="/machine" className="underline hover:text-red-500 active:text-red-500 transform hover:translate-y-1 transition-all duration-150">
              Machine
            </Link>
            <Link href="/credits" className="underline hover:text-red-500 active:text-red-500 transform hover:translate-y-1 transition-all duration-150">
              Credits
            </Link>
          </div>
        </div>
      </nav>
    );
}



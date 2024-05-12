import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md py-2 sticky bottom-0">
      <div className="flex justify-center items-center text-center">
        <Link className="w-[50%]" href="/">
          <span className="text-blue-500 font-bold">Home</span>
        </Link>
        <Link className="w-[50%]" href="/pantry">
          <span className="text-blue-500 font-bold">Pantry</span>
        </Link>
      </div>
    </nav>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center font-bold pb-4 px-4 mt-1 bg-white w-full sticky bottom-0">
      <div className="flex justify-center items-center text-center mb-4 py-2 border-b border-t">
        <Link className="w-[50%]" href="/">
          <span className="text-blue-500 font-bold">Home</span>
        </Link>
        <Link className="w-[50%]" href="/pantry">
          <span className="text-blue-500 font-bold">Pantry</span>
        </Link>
      </div>
        &copy; Phoebe Koh 2024
    </footer>
  );
}

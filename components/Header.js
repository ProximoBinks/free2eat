import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-500 p-5 text-white text-3xl font-bold text-center z-50 w-full">
      <Link href="/">
        Free2Eat
      </Link>

    </header>
  );
}

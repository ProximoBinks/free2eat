import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import TagList from '../components/TagList';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Pantry() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-md mx-auto min-h-screen bg-white shadow-lg">
        <Head>
          <title>Pantry - Free2Eat</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="mt-2 flex-grow px-[5%]">
          <SearchBar page="pantry" />
          <Link href="/"><span className="bg-blue-500 text-white py-1 px-2 rounded-lg font-bold">&lt; Back</span></Link>
          <TagList />
        </main>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

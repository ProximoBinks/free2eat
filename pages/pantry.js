import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import TagList from '../components/TagList';
// import NavBar from '../components/NavBar';
import Link from 'next/link';
import { useState } from 'react';

export default function Pantry() {
    const [tagSearch, setTagSearch] = useState('');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col w-full max-w-md mx-auto min-h-screen bg-white shadow-lg">
                <Head>
                    <title>Pantry - Free2Eat</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <main className="mt-2 flex-grow px-[5%]">
                    <SearchBar page="pantry" onSearch={setTagSearch} />
                    <Link href="/"><span className="bg-blue-500 text-white py-2 px-3 rounded-3xl font-[500] hover:bg-blue-800 transition-all">&lt; Back</span></Link>
                    <TagList filter={tagSearch} />
                </main>
                {/* <NavBar /> */}
                <Footer />
            </div>
        </div>
    );
}

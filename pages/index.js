import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Initialize tags from localStorage on client-side only
    const savedTags = localStorage.getItem('selectedTags');
    if (savedTags) {
      setTags(JSON.parse(savedTags));
    }

    const handleStorage = () => {
      const savedTags = localStorage.getItem('selectedTags');
      setTags(savedTags ? JSON.parse(savedTags) : []);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    localStorage.setItem('selectedTags', JSON.stringify(newTags));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-md mx-auto min-h-screen bg-white shadow-lg">
        <Head>
          <title>Free2Eat: Allergy-Friendly Recipes at Your Fingertips</title>
          <meta name="description" content="Discover and explore a wide variety of recipes that cater to specific dietary needs without compromising on taste. Free2Eat helps you find the perfect meals for your dietary restrictions, including dairy-free, gluten-free, and nut-free options." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="mt-2 flex-grow px-[5%]">
          <SearchBar page="home" onSearch={setSearchQuery} />
          {tags.map(tag => (
            <span key={tag} className="tag bg-blue-500 text-white mr-2 mb-2 inline-flex items-center">
              {tag}
              <button onClick={() => removeTag(tag)} className="ml-2 text-sm">✕</button>
            </span>
          ))}
          {(searchQuery === '' && tags.length === 0) ? (
            <div className="text-center mt-20 flex-col flex justify-center items-center">
              <img src="empty-state-icon.png" className="w-[80px] h-[80px] mb-2"></img>
              <p className="text-[#989899]">Add your allergies to get<br></br>started</p>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg font-bold" onClick={() => window.location.href = '/pantry'}>
                add allergies
              </button>
            </div>
          ) : <RecipeList searchQuery={searchQuery} selectedTags={tags} />}
        </main>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

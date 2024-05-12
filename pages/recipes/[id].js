import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/recipes.json'); // Adjust URL accordingly
    const recipes = await res.json();
    const paths = recipes.map(recipe => ({
        params: { id: recipe.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch('http://localhost:3000/recipes.json');
    const recipes = await res.json();
    const recipe = recipes.find(r => r.id.toString() === params.id);

    return { props: { recipe } };
}

export default function RecipePage({ recipe }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col w-full max-w-md mx-auto min-h-screen bg-white shadow-lg">
                <Head>
                    <title>{recipe.title} - Free2Eat</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <main className="mt-2 flex-grow px-[5%]">
                    <div className="mt-1 mb-2">
                        <Link href="/"><span className="bg-blue-500 text-white py-1 px-2 rounded-lg font-bold">&lt; Back</span></Link>
                    </div>
                    <h1 className="font-bold">{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <img className="mt-2 rounded-3xl shadow border" src={`../${recipe.image}`} alt={recipe.title} style={{ width: '100%' }} />
                </main>
                <NavBar />
                <Footer />
            </div>
        </div>
    );
}
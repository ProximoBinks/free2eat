import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import recipes from '../../data/recipes.json';

export async function getStaticPaths() {
    const paths = recipes.map(recipe => ({
        params: { id: recipe.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const recipe = recipes.find(r => r.id.toString() === params.id);

    if (!recipe) {
        return { notFound: true };
    }

    return { props: { recipe } };
}

export default function RecipePage({ recipe }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col w-full max-w-md mx-auto min-h-screen bg-white shadow-lg">
                <Head>
                    <title>{recipe.title} - Free2Eat</title>
                    <meta name="description" content={recipe.description} />
                </Head>
                <Header />
                <main className="mt-2 flex-grow px-[5%]">
                    <div className="mt-1 mb-3 sticky top-3">
                        <Link href="/">
                            <span className="bg-blue-500 text-white py-2 px-3 rounded-3xl font-[500] hover:bg-blue-800 transition-all">&lt; Back</span>
                        </Link>
                    </div>
                    <h1 className="font-bold">{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <img
                        className="mt-2 rounded-3xl shadow border w-full"
                        src={`/${recipe.image}`}
                        alt={recipe.title}
                        loading="lazy"
                    />
                    <h2 className="mt-4 font-bold">Ingredients:</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2 className="mt-4 font-bold">Instructions:</h2>
                    <ol className="px-[5%] list-decimal">
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </main>
                <Footer />
            </div>
        </div>
    );
}

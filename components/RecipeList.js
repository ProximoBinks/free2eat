import { useState, useEffect } from 'react';
import Link from 'next/link';

const fetchRecipes = async () => {
    try {
        const response = await fetch('/recipes.json');
        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        return [];
    }
};

export default function RecipeList({ searchQuery, selectedTags }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes().then(allRecipes => {
            const filteredRecipes = allRecipes.filter(recipe => {
                const queryMatch = searchQuery ? 
                    (recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) : true;
                const tagsMatch = selectedTags.length > 0 ? 
                    selectedTags.every(tag => recipe.tags.includes(tag)) : true;
                return queryMatch && tagsMatch;
            });
            setRecipes(filteredRecipes);
        });
    }, [searchQuery, selectedTags]);

    return (
        <div className="mt-2">
            {recipes.map(recipe => (
                <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
                    <div className="block pb-2">
                        <h3 className="font-bold">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <img className="rounded-3xl shadow mt-2 border" src={recipe.image} alt={recipe.title} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

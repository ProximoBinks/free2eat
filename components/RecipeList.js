import { useState, useEffect } from 'react';

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
                    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) : true;
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
                <div className="pb-2" key={recipe.id}>
                    <h3 className="font-bold">{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <img className="rounded-3xl shadow mt-2 border" src={recipe.image}></img>
                </div>
            ))}
        </div>
    );
}

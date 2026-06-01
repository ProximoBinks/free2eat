import { useMemo } from 'react';
import Link from 'next/link';
import recipes from '../data/recipes.json';

export default function RecipeList({ searchQuery, selectedTags }) {
    const filteredRecipes = useMemo(() => {
        return recipes.filter(recipe => {
            const queryMatch = searchQuery
                ? recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                : true;
            const tagsMatch = selectedTags.length > 0
                ? selectedTags.every(tag => recipe.tags.includes(tag))
                : true;
            return queryMatch && tagsMatch;
        });
    }, [searchQuery, selectedTags]);

    return (
        <div className="mt-2">
            {filteredRecipes.map(recipe => (
                <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
                    <div className="block pb-2">
                        <h3 className="font-bold">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <img
                            className="rounded-3xl shadow mt-2 border"
                            src={recipe.image}
                            alt={recipe.title}
                            loading="lazy"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}

import { useState, useEffect } from 'react';

const initialTags = ['dairy-free', 'gluten-free', 'nut-free', 'egg-free', 'sesame-free', 'vegan'];

export default function TagList({ filter }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [displayedTags, setDisplayedTags] = useState(initialTags);

    useEffect(() => {
        const savedTags = localStorage.getItem('selectedTags');
        if (savedTags) {
            setSelectedTags(JSON.parse(savedTags));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    }, [selectedTags]);

    useEffect(() => {
        // Apply filter to tags
        if (filter) {
            const lowerFilter = filter.toLowerCase();
            setDisplayedTags(initialTags.filter(tag => tag.toLowerCase().includes(lowerFilter)));
        } else {
            setDisplayedTags(initialTags); // Show all tags if no filter
        }
    }, [filter]);  // Ensure dependency array includes filter to react to changes

    const toggleTag = (tag) => {
        setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };

    return (
        <div className="py-4 space-y-2">
            {displayedTags.map(tag => (
                <button
                    key={tag}
                    className={`tag ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => toggleTag(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
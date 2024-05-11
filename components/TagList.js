import { useState, useEffect } from 'react';

const initialTags = ['dairy-free', 'gluten-free', 'nut-free', 'egg-free'];

export default function TagList() {
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        // Read tags from localStorage on client-side only
        const savedTags = localStorage.getItem('selectedTags');
        if (savedTags) {
            setSelectedTags(JSON.parse(savedTags));
        }
    }, []);

    useEffect(() => {
        // Save to localStorage on changes to selectedTags
        localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    }, [selectedTags]);

    const toggleTag = (tag) => {
        setSelectedTags(prev => {
            const newTags = prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag];
            return newTags;
        });
    };

    return (
        <div className="py-4 space-y-2">
            {initialTags.map(tag => (
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

export default function SearchBar({ page, onSearch }) {
    return (
        <div className="mt-2 mb-4 sticky top-2 bg-white shadow border py-2 px-3 rounded-lg z-50">
            <input
                className="form-input w-full outline-none"
                type="text"
                placeholder={`Search ${page === 'pantry' ? 'allergies' : 'recipes or allergies'}`}
                onChange={event => onSearch(event.target.value)}
            />
        </div>
    );
}
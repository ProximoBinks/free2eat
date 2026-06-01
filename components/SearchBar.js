export default function SearchBar({ page, onSearch }) {
    return (
        <div className="mt-2 mb-4 sticky top-2 bg-white shadow border py-2 px-3 rounded-lg z-50">
            <label htmlFor={`search-${page}`} className="sr-only">
                Search {page === 'pantry' ? 'allergies' : 'recipes or allergies'}
            </label>
            <input
                id={`search-${page}`}
                className="form-input w-full outline-none"
                type="search"
                placeholder={`Search ${page === 'pantry' ? 'allergies' : 'recipes or allergies'}`}
                onChange={event => onSearch(event.target.value)}
            />
        </div>
    );
}

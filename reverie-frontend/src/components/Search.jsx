import "../css/Search.css";
//need to add diff styling to mens

const Search = () => {
    return (
        <div id="shopping-search" className="columns">
            <div id="womens-search-drop">
                <div id="toggle-search">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="search-bar-items" className="hide-small">
                    <li>Size ⌄</li>
                    <li>Color ⌄</li>
                    <li>Price ⌄</li>
                    <li>Brand ⌄</li>
                </ul>
            </div>
            <div id="womens-search-sort" className="columns">
                <p>Sort:</p>
                <div id="womens-search-sort-bar">
                    <p>Featured</p>
                    <p>⌄</p>
                </div>
                <div id="womens-search-sort-btn" className="columns">
                    <button>&lt;</button>
                    <p>1/10</p>
                    <button>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Search;
import "../css/Search.css";
import {useState} from "react";

const Search = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <div id="shopping-search" className="columns">
            <div id="womens-search-drop">
                <div id="toggle-search" onClick={toggleMenu} href="#">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="search-bar-items" className={menuOpen?"columns":"hide-small"}>
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
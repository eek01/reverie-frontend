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
                 {/* up arrow = &#8963, down arrow = &#8964 */}
                <ul id="search-bar-items" className={menuOpen?"columns":"hide-small"}>
                    <li>Size &#8964;</li>
                    <li>Color &#8964;</li>
                    <li>Price &#8964;</li>
                    <li>Brand &#8964;</li>
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
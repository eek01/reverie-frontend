import "../css/Decor.css";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";

const Decor = () => {
    return (
        <main id="home-content">
            <Search/>
            <div id="shop-container">
                <div id="home-shop" className="columns">
                    <Link to="/shop">
                        <Item 
                            title="Ceramic Pitcher Vase"
                            price="$28"/>
                    </Link>
                    <Item 
                        title="Textured Pot"
                        price="$35"/>
                    <Item 
                        title="Wide Pot"
                        price="$16"/>
                    <Item 
                        title="Decorative Mosaic tea Kettle"
                        price="$29"/>
                    <Item 
                        title="Woven Chevron Hamper"
                        price="$24"/>
                    <Item 
                        title="Square Wall Shelves"
                        price="$40"/>
                    <Item 
                        title="Woven Table Mat"
                        price="$13"/>
                    <Item 
                        title="Wired Light"
                        price="$17"/>
                    <Item 
                        title="Coffee Table Assortment"
                        price="$79"/>
                    <div id="bottom-search-sort-btn" className="columns">
                        <button>&lt;</button>
                        <p>1/10</p>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </main>
    );  
};

export default Decor;
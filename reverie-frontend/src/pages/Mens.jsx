import "../css/Mens.css";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";

const Mens = () => {
    return (
        <main id="mens-content">
            <Search/>
            <div id="shop-container">
                <div id="mens-shop" className="columns">
                    <Link to="/shop">
                        <Item 
                            title="Navy Windbreaker"
                            price="$55"/>
                    </Link>
                    <Item 
                        title="White T-Shirt"
                        price="$15"/>
                    <Item 
                        title="Stone-Wash Jeans"
                        price="$79"/>
                    <Item 
                        title="Denim Jacket"
                        price="$58"/>
                    <Item 
                        title="Short Sleeved Button Down"
                        price="$28"/>
                    <Item 
                        title="Gray Striped Blazer Jacket"
                        price="$39"/>
                    <Item 
                        title="Puffer Jacket with Fur Collar"
                        price="$60"/>
                    <Item 
                        title="Burnt Orange Oversized T-Shirt"
                        price="$19"/>
                    <Item 
                        title="V-Neck Sweater"
                        price="$39"/>
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

export default Mens;
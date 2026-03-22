import "../css/Womens.css";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";

const Womens = () => {
    return (
        <main id="womens">
            <Search/> 
            <div id="womens-shop-container">
                <div id="womens-shop" className="columns">
                    <Link to="/shop">
                        <Item 
                            title="Brown Button-down"
                            price="$28"/>
                    </Link>
                    <Item 
                        title="Pink Puffer"
                        price="$19"/>
                    <Item 
                        title="White Sneakers"
                        price="$99"/>
                    <Item 
                        title="White Sandals"
                        price="$49"/>
                    <Item 
                        title="Metallic Lace Dress"
                        price="$16"/>
                    <Item 
                        title="Khaki Straight Leg Pants"
                        price="$59"/>
                    <Item 
                        title="Wrap Dress"
                        price="$29"/>
                    <Item 
                        title="Chunky Knit Sweater"
                        price="$60"/>
                    <Item 
                        title="Open Back Button-Down"
                        price="$17"/>
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

export default Womens;
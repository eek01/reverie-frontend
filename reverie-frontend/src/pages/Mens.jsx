import "../css/Mens.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";

const Mens = () => {
    const [items, setItems] = useState([]);

    //after data has loaded
    useEffect(()=>{
        const loadItems = async() => {
            //access json file w axios
            const response = await axios.get("https://demo-backend-p8iz.onrender.com/api/mens");
            setItems(response.data);
        };
        loadItems();
    },[]);

    return (
        <main id="mens-content">
            <Search/>
            <div id="shop-container">
                <div id="mens-shop" className="columns">
                    {items.map((item)=>(
                        <Link to="/shop">
                        <Item 
                            key={item._id}
                            _id={item._id}
                            title={item.title}
                            price={"$"+item.price}
                            main_img={"mens/"+item.img_name}/>
                    </Link>
                    ))}
                    {/* <Item 
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
                        price="$39"/> */}
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
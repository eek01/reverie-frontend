import "../css/Mens.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";
import AddDialog from "../components/AddDialog";

const Mens = () => {
    const [items, setItems] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //after data has loaded
    useEffect(()=>{
        const loadItems = async() => {
            //access json file w axios
            // const response = await axios.get("https://demo-backend-p8iz.onrender.com/api/items");
            const urlRender = "https://demo-backend-p8iz.onrender.com/api/items";
            const urlLocal = "http://localhost:3002/api/items";
            const response = await axios.get(urlRender);
            setItems(response.data);
        };
        loadItems();
    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const addItemToList = (item) => {
        //adds new item to list of items
        setItems((items)=>[...items,item]);
    };


    return (
        <main id="mens-content">
            <Search/>
            <div id="shop-container">
                <div id="mens-shop" className="columns">
                    {items
                    .filter((item) => item.category === "mens")
                    .map((item)=>(
                        <Link to={`/shop/items/${item._id}`}>
                        <Item 
                            key={item._id}
                            _id={item._id}
                            title={item.title}
                            price={"$"+item.price}
                            main_img={item.img_name}
                            category={item.category}/>
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
                        <p></p>
                    <button id="addItem" onClick={openAddDialog}>+</button>
                    {showAddDialog?(<AddDialog 
                                        closeAddDialog={closeAddDialog}
                                        addItemToList={addItemToList}
                                        />):("")}
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
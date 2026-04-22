import "../css/Womens.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";
import AddDialog from "../components/AddDialog";

//things to change
//make one big json file w items (add category)



const Womens = () => {
    const [items, setItems] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //after data has loaded
    useEffect(()=>{
        const loadItems = async() => {
            //access json file w axios
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
        <main id="womens">
            <Search/> 
            <div id="womens-shop-container">
                <div id="womens-shop" className="columns">
                    {items
                    .filter((item) => item.category === "womens")
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
                    {/* <Link to="/shop">
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
                        price="$17"/> */}
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

export default Womens;
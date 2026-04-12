import "../css/Decor.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import Search from "../components/Search";
import {Link} from "react-router-dom";
import AddDialog from "../components/AddDialog";

const Decor = () => {
    const [items, setItems] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);


    //after data has loaded
    useEffect(()=>{
        const loadItems = async() => {
            //access json file w axios
            const response = await axios.get("https://demo-backend-p8iz.onrender.com/api/items");
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
        <>
        <main id="home-content">
            <Search/>
            <div id="shop-container">
                <div id="home-shop" className="columns">
                    {items
                    .filter((item) => item.category === "decor")
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
                        price="$79"/> */}
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
        </>
    );  
};

export default Decor;
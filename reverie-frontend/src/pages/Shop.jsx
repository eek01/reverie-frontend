import ShopInfo from "../components/ShopInfo";
import Slideshow from "../components/Slideshow";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Shop = () => {
    const {category, id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const loadItems = async() => {
            //access json file w axios
            const urlRender = `https://demo-backend-p8iz.onrender.com/api/${category}/${id}`;
            const urlLocal = `http://localhost:3002/api/${category}/${id}`;
            const response = await axios.get(urlRender);
            setItems(response.data);
        };
        loadItems();
    },[]);

    return (
        <main>
            <ShopInfo 
                category={items.category}
                key={items._id}
                _id={items._id}
                img_name={items.img_name}
                title={items.title}
                price={items.price}
                features={items.features}
                care={items.care} 
                size={items.size_fit}
                />
            <section id="quick-shop">
                <h1>You May Also Like</h1>
                <Slideshow />
            </section>
        </main>
    );
};

export default Shop;
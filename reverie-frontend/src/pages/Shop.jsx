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
            const response = await axios.get(`https://demo-backend-p8iz.onrender.com/api/${category}/${id}`);
            setItems(response.data);
        };
        loadItems();
    },[]);

    return (
        <main>
            <ShopInfo 
                category={`${category}`}
                key={items._id}
                _id={items._id}
                img_name={`${category}/`+items.img_name}
                title={items.title}
                price={"$"+items.price}
                // features={items.features[0]}
                // care={items.care[0]} 
                // size={items.size}
                />
            <section id="quick-shop">
                <h1>You May Also Like</h1>
                <Slideshow />
            </section>
        </main>
    );
};

export default Shop;
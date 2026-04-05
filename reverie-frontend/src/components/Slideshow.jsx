import "../css/Slideshow.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Slideshow = () => {
    const [items, setItems] = useState([]);

    //after data has loaded
    useEffect(()=>{
        const loadItems = async() => {
            //access json file w axios
            const response = await axios.get("https://demo-backend-p8iz.onrender.com/api/quickShop");
            setItems(response.data);
        };
        loadItems();
    },[]);

    const [showDialog, setShowDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openDialog = (item) => {
        setSelectedItem(item);
        setShowDialog(true);
    };

    const closeDialog = () => {
        setSelectedItem(null);
        setShowDialog(false);
    };

    function importAll(r) {
        return r.keys().map(r);
    };

    const imagesOne = importAll(
        require.context("../images/shop-slideshow/one", false, /\.(png|jpe?g|svg)$/)
    );
    const imagesTwo = importAll(
        require.context("../images/shop-slideshow/two", false, /\.(png|jpe?g|svg)$/)
    );
    const images = [imagesOne, imagesTwo];

    const [index, setIndex] = useState(0);
            

    const slideForward = () => {
        // if(slideIndex == imgs.length-1) {
        //     setSlideIndex(0);
        // } else {
        //     setSlideIndex(slideIndex+1);
        // }
        // or
        setIndex(index === images.length-1?0:index+1);
    };

    const slidePrev = () => {
        setIndex(index === 0?images.length-1:index-1);
    };

    return (
        <>
        <div id="quick-shop-content">
            <button id="main-quick-shop-left" onClick={slidePrev}>&lt;</button>
            <div id="main-quick-shop-imgs">
                <section className="quick-shop-section columns">
                    {items[index] ? (
                    <>
                        {items[index].map((product, i) => (
                        <div key={product._id} className="main-quick-shop-width" onClick={() => openDialog(product)}>
                            <div className="container">
                            <img src={"https://demo-backend-p8iz.onrender.com/images/quickShop/"+product.img_name} alt={product.title} />
                            <div className="text-block">
                                <h2>{product.title}</h2>
                                <h2>{"$"+product.price}</h2>
                            </div>
                            </div>
                        </div>
                        ))}
                    </>
                    ) : (
                    <p>Loading...</p>
                    )}
                </section>
                {/* <section className="quick-shop-section hidden">
                    <div className="main-quick-shop-width ">
                        <div className="container">
                            <img src={images[index]} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
                            <div className="text-block">
                                <h2>White Sneakers</h2>
                                <h3>$99</h3>
                            </div>
                        </div>
                    </div>   
                    <div className="main-quick-shop-width ">
                        <div className="container">
                            <img src={reverie5} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
                            <div className="text-block">
                                <h2>Brown Button-Down</h2>
                                <h3>$28</h3>
                            </div>
                        </div>
                    </div>
                    <div className="main-quick-shop-width ">
                        <div className="container">
                            <img src={mens3} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
                            <div className="text-block">
                                <h2>Stone-Wash Jeans</h2>
                                <h3>$79</h3>
                            </div>
                        </div>
                    </div>   
                </section> */}
            </div>
            <button id="main-quick-shop-right" onClick={slideForward}>&gt;</button>
        </div>
        {showDialog?(
                  <div className="w3-modal">
                    <div className="w3-modal-content">
                        <div className="w3-container">
                            <span onClick={closeDialog} className="w3-button w3-display-topright">&times;</span>
                            <div id="shop-content" className="columns">
                                <div id="shop-img" className="one">
                                    <img src={"https://demo-backend-p8iz.onrender.com/images/quickShop/"+selectedItem.img_name}/>
                                </div>
                                <div id="shop-description" className="one">
                                    <h3>{selectedItem.title}</h3>
                                    <h5>${selectedItem.price}</h5>
                                    <hr/>
                                    <p>Size</p>
                                    <div id="size-btn">
                                        <div><h6>S</h6></div>
                                        <div><h6>M</h6></div>
                                        <div><h6>L</h6></div>
                                        <div><h6>XL</h6></div>
                                        <div><h6>XXL</h6></div>
                                    </div>
                                    <button id="buy-now-btn">Buy Now</button>
                                    <hr/>
                                    <div id="shop-details">
                                        <h5>Details</h5>
                                        <h6>Product Code:{selectedItem._id}</h6>
                                        <h5>Features:</h5>

                                        <h6>{"- "+ selectedItem.features}</h6>
                                        <h6>{selectedItem.category}</h6>
                                        
                                        {!(selectedItem.category === "decor") && (
                                            <>
                                            <h5>Care:</h5>
                                            <h6>{"- "+ selectedItem.care}</h6>
                                            </>
                                        )}

                                        {!(selectedItem.category === "decor") && (
                                            <>
                                            <h5>Size + Fit:</h5>
                                            <h6>- Model wears size {selectedItem.size_fit?.[0]}, Model height is {selectedItem.size_fit?.[1]}</h6>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <h1></h1>
            )}
        </>
    );
};

export default Slideshow;
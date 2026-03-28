import "../css/Slideshow.css";
import {Link} from "react-router-dom";
import { useState } from "react";

const Slideshow = () => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const imagesOne = importAll(
        require.context("../images/shop-slideshow/one", false, /\.(png|jpe?g|svg)$/)
    );
    const imagesTwo = importAll(
        require.context("../images/shop-slideshow/two", false, /\.(png|jpe?g|svg)$/)
    );
    const images = [imagesOne, imagesTwo];
    // const images = importAll(
    //     require.context("../images/shop-slideshow", false, /\.(png|jpe?g|svg)$/)
    // );

    const text = [[["Chunky Knit Sweater","$60"],["White Heeled Sandals","$49"],["Navy Windbreaker","$55"]], [["Stone-Wash Jeans","$79"],["White Sneakers","$99"],["Brown Button-Down","$28"]]];

    const [index, setIndex] = useState(0);
            

    const slideForward = () => {
        // if(slideIndex == imgs.length-1) {
        //     setSlideIndex(0);
        // } else {
        //     setSlideIndex(slideIndex+1);
        // }
        // or
        setIndex(index === images.length-1?0:index+1);
        setIndex(index === text.length-1?0:index+1);
    };

    const slidePrev = () => {
        setIndex(index === 0?images.length-1:index-1);
        setIndex(index === 0?text.length-1:index-1);
    };

    return (
        <div id="quick-shop-content">
            <button id="main-quick-shop-left" onClick={slidePrev}>&lt;</button>
            <div id="main-quick-shop-imgs">
                <section className="quick-shop-section columns">
                    <div className="main-quick-shop-width">
                        <div className="container">
                            <Link to="/shop">
                                <img src={images[index][0]} alt={images[index]}/>
                                <div className="text-block">
                                    <h2>{text[index][0][0]}</h2>
                                    <h2>{text[index][0][1]}</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="main-quick-shop-width">
                        <div className="container">
                            <img src={images[index][1]} alt="Image of man modeling a blue windbreaker"/>
                            <div className="text-block">
                                <h2>{text[index][1][0]}</h2>
                                <h2>{text[index][1][1]}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="main-quick-shop-width">
                        <div className="container">
                            <img src={images[index][2]} alt="Image of a leg wearing a white sandal"/>
                            <div className="text-block">
                                <h2>{text[index][2][0]}</h2>
                                <h2>{text[index][2][1]}</h2>
                            </div>
                        </div>
                    </div>
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
    );
};

export default Slideshow;
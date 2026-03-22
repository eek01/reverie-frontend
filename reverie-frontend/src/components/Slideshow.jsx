import "../css/Slideshow.css";
import {Link} from "react-router-dom";
import reverie11 from "../images/main-images/reverie11_cropped.png";
import reverie16 from "../images/main-images/reverie16_cropped.png";
import reverie15 from "../images/main-images/reverie15_cropped.png";
import reverie2Crop from "../images/main-images/reverie2_cropped.jpg";
import mens3 from "../images/main-images/mens3_cropped.jpg";
import reverie5 from "../images/main-images/reverie5_cropped.jpg";

const Slideshow = () => {
    return (
        <div id="quick-shop-content">
            <button id="main-quick-shop-left">&lt;</button>
            <div id="main-quick-shop-imgs">
                <section className="quick-shop-section columns">
                    <div className="main-quick-shop-width">
                        <div className="container">
                            <Link to="/quick-shop">
                            {/* ADD QUICKSHOP PAGE */}
                                <img src={reverie11} alt="Woman pulling a sweater off over her head"/>
                                <div className="text-block">
                                    <h2>Chunky Knit Sweater</h2>
                                    <h2>$60</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="main-quick-shop-width">
                        <div className="container">
                            <img src={reverie16} alt="Image of man modeling a blue windbreaker"/>
                            <div className="text-block">
                                <h2>Navy Windbreaker</h2>
                                <h2>$55</h2>
                            </div>
                        </div>
                    </div>
                    <div className="main-quick-shop-width">
                        <div className="container">
                            <img src={reverie15} alt="Image of a leg wearing a white sandal"/>
                            <div className="text-block">
                                <h2>White Heeled Sandals</h2>
                                <h2>$49</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quick-shop-section hidden">
                    <div className="main-quick-shop-width ">
                        <div className="container">
                            <img src={reverie2Crop} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
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
                </section>
            </div>
            <button id="main-quick-shop-right">&gt;</button>
        </div>
    );
};

export default Slideshow;
import "../css/ImpactSlideshow.css";
import { useState } from "react";

const ImpactSlideshow = () => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const imagesOne = importAll(
        require.context("../images/impact-slideshow/one", false, /\.(png|jpe?g|svg)$/)
    );
    const imagesTwo = importAll(
        require.context("../images/impact-slideshow/two", false, /\.(png|jpe?g|svg)$/)
    );
    const images = [imagesOne, imagesTwo];

    const text = [["Habitat for Humanity", "The Nature Conservancy"], ["350","Trees for the Future"]];

    const [index, setIndex] = useState(0);

    const slideForward = () => {
        setIndex(index === images.length-1?0:index+1);
        setIndex(index === text.length-1?0:index+1);
    };

    const slidePrev = () => {
        setIndex(index === 0?images.length-1:index-1);
    };

    return (
        <div id="nonprofit-highlights">
            <h1>Nonprofits</h1>
                <button id="main-quick-shop-left" onClick={slidePrev}>&lt;</button>

                <div id="main-quick-shop-imgs">
                    <section className="quick-shop-section columns">
                        <div className="main-quick-shop-width">
                            <div className="container">
                                <img src={images[index][0]} alt=""/>
                                <div className="nonprofit-txt-block">
                                    <h3>{text[index][0]}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="main-quick-shop-width">
                            <div className="container">
                                <img src={images[index][1]} alt="Image of man modeling a blue windbreaker"/>
                                <div className="nonprofit-txt-block">
                                    <h3>{text[index][1]}</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="quick-shop-section hidden">
                        <div className="main-quick-shop-width">
                            <div className="container">
                                <img src={treesForTheFuture} alt="Image of a leg wearing a white sandal"/>
                                <div className="nonprofit-txt-block">
                                    <h3>Trees for the Future</h3>
                                </div>
                            </div>
                        </div>
                        <div className="main-quick-shop-width">
                            <div className="container">
                                <img src={charity} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
                                <div className="nonprofit-txt-block">
                                    <h3>350</h3>
                                </div>
                            </div>
                        </div>    
                    </section> */}
                </div>
                <button id="main-quick-shop-right"onClick={slideForward}>&gt;</button>
        </div>
    );
};

export default ImpactSlideshow;
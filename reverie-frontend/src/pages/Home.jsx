import "../css/Home.css";
// import {Link} from "react-router-dom";
import ImgCollage from "../components/ImgCollage";
import ShopSale from "../components/ShopSale";
import Slideshow from "../components/Slideshow";

const Home = () => { 
    return (
        <main id="main-content">
            <ImgCollage />
            <ShopSale />
            {/* <section id="shop-sale" className="columns">
                <div id="shop-sale-img" className="one">
                    <img className="one" src={pinkPuffer} alt="Girl in pink puffer jacket modeling"/>
                </div>
                <div id="shop-sale-txt" className="two">
                    <div id="sale-content-wrapper">
                        <h1>Shop Below $20</h1>
                        <button>Shop Sale</button>
                        <div id="sale-flower1">
                            <img className="hide-small" src={flower200px} alt="flower"/>
                        </div>
                        <div id="sale-flower2">
                            <img src={flower140px} alt="flower"/>
                        </div>
                        <div id="sale-flower3">
                            <img className="hide-small" src={flower100px} alt="flower"/>
                        </div>
                        <div id="sale-flower4">
                            <img className="hide-small" src={flower60px} alt="flower"/>
                        </div>
                        <div id="sale-flower5">
                            <img className="hide-small"  src={flower60px} alt="flower"/>
                        </div>
                        <div id="sale-flower6">
                            <img className="hide-small"  src={flower200px} alt="flower"/>
                        </div>
                        <div id="sale-flower7">
                            <img className="hide-small"  src={flower140px} alt="flower"/>
                        </div>
                        <div id="sale-flower8">
                            <img className="hide-small"  src={flower60px} alt="flower"/>
                        </div>
                        <div id="sale-flower9">
                            <img className="hide-small"  src={flower60px} alt="flower"/>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!--Added JS Slideshow !! :D--> */}
            <section id="quick-shop">
                <h1>New Arrivals, Just Landed</h1>
                <Slideshow />
            </section>
        </main>
    );
};

export default Home; 
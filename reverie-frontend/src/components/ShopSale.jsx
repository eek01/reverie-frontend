import "../css/ShopSale.css";
import pinkPuffer from "../images/main-images/pinkPuffer.png";
import flower200px from "../images/main-images/flower200px.png";
import flower140px from "../images/main-images/flower140.png";
import flower100px from "../images/main-images/flower100px.png";
import flower60px from "../images/main-images/flower60px.png";

const ShopSale = () => {
    return(
        <section id="shop-sale" className="columns">
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
        </section>
    );
};

export default ShopSale;
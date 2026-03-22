import "../css/ImgCollage.css";
import {Link} from "react-router-dom";
import reverie1 from "../images/main-images/reverie1.png";
import reverie2 from "../images/main-images/reverie2.jpg";
import reverie3 from "../images/main-images/reverie3.jpg";
import reverie5 from "../images/main-images/reverie5.jpg";
import reverie13 from "../images/main-images/reverie13.png";
import reverie7 from "../images/main-images/reverie7.jpg";
import reverie9 from "../images/main-images/reverie9.jpg";
import flower200px from "../images/main-images/flower200px.png";
import flower140px from "../images/main-images/flower140.png";

const ImgCollage = () => {
    return(
        <section id="shop-mens-womens">
            <div id="main-img-collage">
                <div id="main-img-collage-imgs">
                    <img className="main-img-collage-row-2 main-img-collage-col-2" src={reverie1} alt="Full body image of a man modeling"/>
                    <img src={reverie2} alt="Zoomed image of a woman leaning over to tie her tennis show"/>
                    <img src={reverie3} alt="Zoomed image of three sweaters folded in a pile"/>
                    <img src={reverie5} alt="Woman modeling a brown button-down"/>
                    <img src={reverie13} alt="Man sitting in the road"/>
                    <img src={reverie7} alt="Man sitting on a roof"/>
                    <img src={reverie9} alt="Clothes hung up on a clothing rack"/>
                </div>
                <div id="img-collage-flower" className="hide-small">
                    <img src={flower200px} alt="flower"/>
                </div>
                <div id="img-collage-flower2" className="hide-small">
                    <img src={flower140px} alt="flower"/>
                </div>
                <div id="main-shop-btns">
                    <Link to="/mens"><button id="main-shop-men">Shop Mens</button></Link>
                    <Link to="/womens"><button id="main-shop-women">Shop Womens</button></Link>
                </div>
            </div>
        </section>
    );
};

export default ImgCollage;
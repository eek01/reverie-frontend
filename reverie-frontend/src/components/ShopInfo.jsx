//going to have props (item img/item title/size/etccccc)
import "../css/ShopInfo.css";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
// import itemPic from "../images/mens-images/mens1.jpg";

const ShopInfo = (props) => {
    const {id} = useParams();

    return (
        <div id="shop-detail-container">
            <div id="shop">
                {/* Im not sure how to make it go back to the page it came from... Im assuming that is javascript :)) */}
                <Link id="back-btn" to="/mens"><p>&lt; Back to results</p></Link>
                <div id="shop-content" className="columns">
                    <div id="shop-img" className="one">
                        <img src={`https://demo-backend-p8iz.onrender.com/images/${props.img_name}`}/>
                    </div>
                    <div id="shop-description" className="one">
                        <h3>{props.title}</h3>
                        <h5>{props.price}</h5>
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
                            <h5>Details:</h5>
                            <h6>Product Code:{props._id}</h6>

                            <h5>Features:</h5>
                            {/* <h6>- {props.features[0]}</h6>
                            <h6>- {props.features[1]}</h6> */}

                            <h5>Care:</h5>
                            {/* <h6>- {props.care[0]}</h6>
                            <h6>- {props.care[1]}</h6> */}

                            <h5>Size + Fit:</h5>
                            {/* <h6>- Model wears size {props.size[0]}, Model height is {props.size[1]}</h6> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopInfo;
import "../css/Item.css";
import itemPic from "../images/mens-images/mens1.jpg";

const Item = (props) => {
    return (
        <section class="shop-section">
            <img src={itemPic}/> 
            <div id="shop-section-txt">
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
        </section>
    );
};

export default Item;
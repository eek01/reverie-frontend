import "../css/Item.css";
// import itemPic from "../images/mens-images/mens1.jpg";

const Item = (props) => {
    const urlRender = `https://demo-backend-p8iz.onrender.com/images/${props.category}/${props.main_img}`;
    const urlLocal = `http://localhost:3002/images/${props.category}/${props.main_img}`;

    return (
        <section class="shop-section">
            <img src={urlRender}/> 
            <div id="shop-section-txt">
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
        </section>
    );
};

export default Item;
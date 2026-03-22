import ShopInfo from "../components/ShopInfo";
import Slideshow from "../components/Slideshow";

const Shop = () => {
    return (
        <main>
            <ShopInfo 
                _id="1"
                img_name="mens-images/mens1.jpg"
                title="Navy Windbreaker"
                price="55"
                features={["Quarter zip zipper", "Quarter zip buttons"]}
                care={["Nylon, Polyster", "Machine wash"]} 
                size={["S", "6'"]}/>
            <section id="quick-shop">
                <h1>You May Also Like</h1>
                <Slideshow />
            </section>
        </main>
    );
};

export default Shop;
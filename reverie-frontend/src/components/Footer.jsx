import "../css/Footer.css";
import FooterNav from "./FooterNav";
import Navigation from "./Navigation";
import instagram from "../images/main-images/Instagram.png"
import facebook from "../images/main-images/Facebook.png";
import pinterest from "../images/main-images/pinterest.png";
import tiktok from "../images/main-images/tiktok.png";
import youtube from "../images/main-images/youtube.png";

const Footer = () => {
    return (
        <footer id="main-footer">
            <div id="main-footer-content" className="columns">
                <div id="mission" className="one">
                    <h3>Our Mission</h3>
                    <p>Here at ReverieDaydream, we strive to provide our customers with sustainable clothes, so they can shop with piece of mind. By 2027 we plan to reduce our footprint by 50%.</p>
                </div>
                <div id="connected" className="one">
                    <h3>Get Connected</h3>
                    <p>reveriedaydream@gmail.com</p>
                    <div id="connected-img" className="columns">
                        <img src={instagram} alt="Instagram Logo"/>
                        <img src={facebook} alt="Facebook Logo"/>
                        <img src={pinterest} alt="Pinterest Logo"/>
                        <img src={tiktok} alt="TikTok Logo"/>
                        <img src={youtube} alt="Youtube Logo"/>
                    </div>
                </div>
            </div>
            <FooterNav />
        </footer>
    );
};

export default Footer;
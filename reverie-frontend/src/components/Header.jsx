import "../css/Header.css";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import logo from "../images/main-images/ReverieDaydreamLogoResize.png";

const Header = () => {
    return (
        <header>
            <div id="title" className="columns">
                <Link to="/"><img src={logo} alt="Reverie Daydream Logo"/></Link> 
                <Link to="/"><h1>Reverie Daydream</h1></Link>
            </div>
            <Navigation />
        </header>
        
    );
};

export default Header;
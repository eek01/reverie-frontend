import {Link} from "react-router-dom";
import {useState} from "react";
import "../css/Navigation.css";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // ^^^boolean - defaulted to false
    // , setMenuOpen is function that changes our menuOpen variable

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    // up arrow = &#8963, down arrow = &#8964
    // {menuOpen? (<p>&#8963;</p>) : (<p>&#8964;</p>)}
    // or
    // if(menuOpen){
    //     &#8963;
    // } else {
    //     &#8964;
    // }

    return (
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleMenu} herf="#">
                <div></div>
                <div></div>
                <div></div>
            </a>
            {/* <ul className="columns hide-small"> */}
            <ul className={menuOpen?"columns":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/womens">Womens</Link></li>
                <li><Link to="/mens">Mens</Link></li>
                <li><Link to="/decor">Decor</Link></li>
                <li><Link to="/impact">Impact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;

import "../css/FooterNav.css";
import {Link} from "react-router-dom";

const FooterNav = () => {
    return (
        <nav id="footer-nav-bottom" className="common-nav">
            <ul>
                <li><Link to="/">&copy; Reverie Daydream</Link></li>
                <li><Link to="/womens">Womens</Link></li>
                <li><Link to="/mens">Mens</Link></li>
                <li><Link to="/decor">Decor</Link></li>
                <li><Link to="/impact">Impact</Link></li>
            </ul>
        </nav>
    );
};

export default FooterNav;
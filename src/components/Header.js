import { CART_LOGO, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <img className="cart" src={CART_LOGO} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

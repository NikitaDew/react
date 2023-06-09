import { useSelector } from "react-redux";
import { CART_LOGO, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("redux cartItems", cartItems);
  const isOnline = useOnline();
  return (
    <div className="flex  justify-between bg-slate-50 shadow-lg h-20">
      <div className="logoContainer ">
        <img data-testid="logo" className="h-16 w-20 m-2" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex py-6">
          <Link to="/">
            <li className="px-2 hover:text-orange-300 active:text-orange-400">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="px-2  hover:text-orange-300 active:text-orange-400">
              About Us
            </li>
          </Link>
          <li className="px-2  hover:text-orange-300 active:text-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2  hover:text-orange-300 active:text-orange-400">
            <Link to="/instaMart">Insta Mart</Link>
          </li>
          <li className="px-2 hover:text-orange-300 active:text-orange-400">
            <Link to="/cart">
              <img className="h-7" src={CART_LOGO} />
              <span data-testid="cart">{cartItems.length}</span>
            </Link>
          </li>
          <h1 data-testid="online-status">{isOnline ? "🟢" : "🔴 "}</h1>
        </ul>
      </div>
    </div>
  );
};
export default Header;

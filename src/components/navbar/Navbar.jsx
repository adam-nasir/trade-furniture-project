import "./navbar.css";
import logo from "../../assets/svgs/logo.svg";
import menu from "../../assets/svgs/hamburger.svg";

import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <header className="logo-content">
          <img src={logo} alt="Trade logo" />
        </header>
        <div className="navbar__list-content">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#home" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__link">
                About
              </a>
            </li>
            <li className="navbar__item">
              <a href="#shop" className="navbar__link">
                Shop
              </a>
            </li>
          </ul>
          <div className="navbar__user-content">
            <RiAccountCircleFill className="account" />
            <AiOutlineShoppingCart className="shopping-cart" />
          </div>
        </div>

        <div className="navbar__menu">
          <img src={menu} className="" alt="hamburger menu" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

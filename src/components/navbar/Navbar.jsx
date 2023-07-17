import "./navbar.css";
import logo from "../../assets/svgs/logo.svg";
import account from "../../assets/svgs/account.svg";
import menu from "../../assets/svgs/hamburger.svg";
import shoppingcart from "../../assets/svgs/shopcart.svg";
function Navbar() {
  return (
    <nav className="navbar">
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
          <img src={account} className="account" alt="user account" />
          <img
            src={shoppingcart}
            className="shopping-cart"
            alt="shopping cart"
          />
        </div>
      </div>

      <div className="navbar__menu">
        <img src={menu} className="" alt="hamburger menu" />
      </div>
    </nav>
  );
}

export default Navbar;

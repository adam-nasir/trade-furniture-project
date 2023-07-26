import { useState, useRef } from "react";
import { gsap } from "gsap";
import "./navbar.css";
import logo from "../../assets/svgs/logo.svg";

import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const handleClickAnimate = () => {
    let ctx = gsap.context(() => {
      gsap.to("body", { overflowY: "hidden", duration: 0.2 });
      gsap.to(".overlay", { display: "block", duration: 0.3 });
      gsap.to(".navbar__list-content", { x: 0, duration: 0.4 });
    });
  };

  const handleClickStop = () => {
    let ctx = gsap.context(() => {
      gsap.to(".overlay", { display: "none", duration: 0.2 });
      gsap.to("body", { overflowY: "auto", duration: 0.3 });
      gsap.to(".navbar__list-content", { x: 300, duration: 0.4 });
    });
  };

  return (
    <nav className="navbar">
      <div onClick={handleClickStop} className="overlay"></div>
      <div className="navbar-container container">
        <header className="logo-content">
          <a href="#home">
            <img src={logo} alt="Trade logo" />
          </a>
        </header>
        <div className="navbar__list-content">
          <MdOutlineClose onClick={handleClickStop} className="closebtn" />
          <header className="logo-content-mobile">
            <a href="#home">
              <img src={logo} alt="Trade logo" />
            </a>
          </header>
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
        <div className="navbar__user-content-mobile">
          <RiAccountCircleFill className="account" />
          <AiOutlineShoppingCart className="shopping-cart" />
          <HiMenuAlt3 onClick={handleClickAnimate} className="navbar__menu" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

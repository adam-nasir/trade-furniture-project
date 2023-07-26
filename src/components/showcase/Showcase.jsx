import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./showcase.css";
import { ButtonLight } from "../../components";
import showcaseImg from "../../assets/images/showcase-img-4.png";

function Showcase() {
  const handleClickAnimate = () => {
    let ctx = gsap.context(() => {
      gsap.to(".showcase__image-content", { y: 20, duration: 0.2 });
    });
  };

  useEffect(() => handleClickAnimate(), []);
  return (
    <section className="showcase">
      <div className="showcase-container">
        <div className="showcase__text-content">
          <h1 className="showcase__text">
            Furniture that matches your{" "}
            <span className="underline-light">needs</span>
          </h1>
          <p className="showcase__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ButtonLight text="Shop Now" />
        </div>
        <div className="showcase__image-content">
          <img src={showcaseImg} alt="image of a chair" />
        </div>
      </div>
    </section>
  );
}

export default Showcase;

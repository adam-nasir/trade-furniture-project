import { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import "./showcase.css";
import { ButtonLight } from "../../components";
import showcaseImg from "../../assets/images/showcase-img-4.png";

function Showcase() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useLayoutEffect(() => {
    if (windowSize.innerWidth >= 947) {
      let tl = gsap.timeline({
        delay: 0.8,
      });
      tl.fromTo(
        ".showcase__image-content",
        { opacity: 0, y: -30, duration: 1 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          ".showcase__text-content",
          { opacity: 0, x: -20, duration: 1 },
          { opacity: 1, x: 0, duration: 1 }
        )
        .fromTo(
          ".showcase .underline ",
          {
            "--myWidth": "0%",
            duration: 3,
          },
          {
            "--myWidth": "105%",
            duration: 2,
          }
        );
    } else if (windowSize.innerWidth <= 940) {
      let tl = gsap.timeline({
        delay: 0.8,
      });
      tl.fromTo(
        ".showcase__text-content",
        { opacity: 0, y: -20, duration: 1 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  });

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  return (
    <section className="showcase">
      <div className="showcase-container">
        <div className="showcase__text-content">
          <h1 className="showcase__text">
            Furniture that matches your{" "}
            <span className="underline underline-light">needs</span>
          </h1>
          <p className="showcase__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ButtonLight text="Browse Our Collection" />
        </div>
        <div className="showcase__image-content">
          <img src={showcaseImg} alt="image of a chair" />
        </div>
      </div>
    </section>
  );
}

export default Showcase;

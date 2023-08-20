import { useState, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import aboutUsImg from "../../assets/images/about-us-img.png";
import "./aboutus.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
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
        scrollTrigger: {
          trigger: ".about-us-container",
          start: "20px",
          end: "bottom",
          markers: true,
        },
      });
      tl.fromTo(
        ".about-us__image-content",
        { opacity: 0, y: -30, duration: 1 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          ".about-us__text-content",
          { opacity: 0, x: -20, duration: 1 },
          { opacity: 1, x: 0, duration: 1 }
        )
        .fromTo(
          ".about-us .underline ",
          {
            "--myWidth": "0%",
            duration: 1,
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
        ".about-us__text-content",
        { opacity: 0, y: -20, duration: 1 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        ".about-us .underline ",
        {
          "--myWidth": "0%",
          duration: 1,
        },
        {
          "--myWidth": "105%",
          duration: 2,
        }
      );
    }
  });

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us__text-content">
          <h1 className="about-us__text">
            Why <span className="underline underline-light">Trade?</span>
          </h1>
          <p className="about-us__subtext">
            We're passionate about sustainability. Our furniture is thoughtfully
            crafted with the environment in mind, ensuring your home is both
            stylish and eco-conscious. Join us in making a positive impact.
          </p>
        </div>
        <div className="about-us__image-content">
          <img src={aboutUsImg} alt="image of a chair" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

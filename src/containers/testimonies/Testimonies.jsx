// Import React Hooks
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Import Images
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import data from "../../data";

import { TestimoniesCard } from "../../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonies.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Testimonies() {
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

  let changeNumberofCardShownWhenResizingWindow = () => {
    if (windowSize.innerWidth > 1221) {
      return 3;
    } else if (windowSize.innerWidth < 1220 && windowSize.innerWidth > 825) {
      return 2;
    } else {
      return 1;
    }
  };

  useLayoutEffect(() => {
    if (windowSize.innerWidth >= 947) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonies-container",
          start: "20px",
          end: "bottom",
          markers: true,
        },
      });
      tl.fromTo(
        ".testimonies__title",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.9 }
      )
        .fromTo(
          ".section__subtext",
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.9 }
        )
        .fromTo(".swiper", { opacity: 0 }, { opacity: 1, duration: 0.9 })
        .fromTo(
          ".testimonies .underline ",
          {
            "--myWidth": "0%",
            duration: 1,
          },
          {
            "--myWidth": "100%",
            duration: 2,
          }
        );
    }
  });

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const renderedCards = data.map((card) => {
    return (
      <SwiperSlide key={card.id}>
        <TestimoniesCard
          titleQuote={card.titleQuote}
          customerImg={card.imgSrc}
          name={card.name}
          quote={card.quote}
          location={card.location}
        ></TestimoniesCard>
      </SwiperSlide>
    );
  });

  const testContainer = useRef();

  return (
    <section className="testimonies">
      {console.log(windowSize.innerWidth)}
      <div className="container testimonies-container" ref={testContainer}>
        <h2 className="section__title testimonies__title">
          People <span className="underline underline-dark">LOVE</span> Trade.
        </h2>
        <p className="section__subtext">See what our customers are saying</p>
        <Swiper
          speed={600}
          parallax={false}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          slidesPerView={changeNumberofCardShownWhenResizingWindow()}
        >
          {renderedCards}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonies;

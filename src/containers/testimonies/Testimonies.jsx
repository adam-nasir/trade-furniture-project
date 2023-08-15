// Import React Hooks
import { useEffect, useLayoutEffect, useState } from "react";

// Import Images
import { gsap } from "gsap";

import data from "../../data";

// Import Images
import person1 from "../../assets/images/person-img-1.jpg";
import person2 from "../../assets/images/person-img-2.jpg";
import person3 from "../../assets/images/person-img-3.jpg";
import person4 from "../../assets/images/person-img-4.jpg";
import person5 from "../../assets/images/person-img-5.jpg";
import person6 from "../../assets/images/person-img-6.jpg";
import person7 from "../../assets/images/person-img-7.jpg";
import person8 from "../../assets/images/person-img-8.jpg";
import person9 from "../../assets/images/person-img-9.jpg";
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

  // Fix this shit

  let num = () => {
    if (windowSize.innerWidth > 1221) {
      return 3;
    } else if (windowSize.innerWidth < 1220 && windowSize.innerWidth <= 825) {
      return 2;
    } else {
      return 1;
    }
  };

  // useLayoutEffect(() => {
  //   if (windowSize.innerWidth >= 947) {
  //     let tl = gsap.timeline({
  //       delay: 0.8,
  //     });
  //     tl.fromTo(
  //       ".showcase__image-content",
  //       { opacity: 0, y: -30, duration: 1 },
  //       { opacity: 1, y: 0, duration: 1 }
  //     )
  //       .fromTo(
  //         ".showcase__text-content",
  //         { opacity: 0, x: -20, duration: 1 },
  //         { opacity: 1, x: 0, duration: 1 }
  //       )
  //       .fromTo(
  //         ".showcase .underline ",
  //         {
  //           "--myWidth": "0%",
  //           duration: 1,
  //         },
  //         {
  //           "--myWidth": "105%",
  //           duration: 2,
  //         }
  //       );
  //   } else if (windowSize.innerWidth <= 940) {
  //     let tl = gsap.timeline({
  //       delay: 0.8,
  //     });
  //     tl.fromTo(
  //       ".showcase__text-content",
  //       { opacity: 0, y: -20, duration: 1 },
  //       { opacity: 1, y: 0, duration: 1 }
  //     ).fromTo(
  //       ".showcase .underline ",
  //       {
  //         "--myWidth": "0%",
  //         duration: 1,
  //       },
  //       {
  //         "--myWidth": "105%",
  //         duration: 2,
  //       }
  //     );
  //   }
  // });

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
  return (
    <section className="testimonies">
      {console.log(windowSize.innerWidth)}
      <div className="container testimonies-container">
        <h2 className="section__title testimonies__title">
          People <span className="underline underline-dark">Love</span> Trade.
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
          slidesPerView={num()}
        >
          {/* <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person1}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person2}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person3}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person4}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person5}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person6}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person7}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person8}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person9}
              location="Toronto, Canada"
            />
          </SwiperSlide> */}
          {renderedCards}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonies;

import "./testimonies.css";
import { TestimoniesCard } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
function Testimonies() {
  return (
    <section className="testimonies">
      <h2>
        People <span className="underline underline-dark">Love</span> Trade.
      </h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <TestimoniesCard name="Emily" location="Toronto, Canada" />
        <TestimoniesCard name="Emily" location="Toronto, Canada" />
        <TestimoniesCard name="Emily" location="Toronto, Canada" />
        ...
      </Swiper>
    </section>
  );
}

export default Testimonies;

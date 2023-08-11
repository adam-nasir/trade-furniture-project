import person1 from "../../assets/images/person-img-1.jpg";
import person2 from "../../assets/images/person-img-2.jpg";
import person3 from "../../assets/images/person-img-3.jpg";
import person4 from "../../assets/images/person-img-4.jpg";
import person5 from "../../assets/images/person-img-5.jpg";
import person6 from "../../assets/images/person-img-6.jpg";
import person7 from "../../assets/images/person-img-7.jpg";
import { TestimoniesCard } from "../../components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./testimonies.css";

// import required modules
import { Navigation } from "swiper/modules";

function Testimonies() {
  return (
    <section className="testimonies">
      <div className="container testimonies-container">
        <h2 className="section__title testimonies__title">
          People <span className="underline underline-dark">Love</span> Trade.
        </h2>
        <p className="section__subtext">See what our customers are saying</p>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person1}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
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
              customerImg={person2}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person1}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniesCard
              name="Emily"
              customerImg={person1}
              location="Toronto, Canada"
            />
          </SwiperSlide>
          <SwiperSlide>
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
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonies;

import "./testimoniescard.css";
import stars from "../../../assets/svgs/stars.svg";

function TestimoniesCard({ name, customerImg, location }) {
  return (
    <div className="testimonies-card">
      <img className="testimonies-card__stars" src={stars} alt="5 stars" />
      <p className="testimonies-card__text">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.”
      </p>
      <div className="testimones-card__customer-info">
        <img
          className="testimones-card__customer-img"
          src={customerImg}
          alt="image of customer"
        />
        <h3 className="testimones-card__customer-name">{name}</h3>
        <p className="testimones-card__customer-location">{location}</p>
      </div>
    </div>
  );
}

export default TestimoniesCard;

import "./testimoniescard.css";
import stars from "../../../assets/svgs/stars.svg";

function TestimoniesCard({ name, customerImg, location, titleQuote, quote }) {
  return (
    <div className="testimonies-card">
      <h3 className="testimones-card__customer-title">{titleQuote}</h3>
      <img className="testimonies-card__stars" src={stars} alt="5 stars" />
      <p className="testimonies-card__text">{quote}</p>
      <div className="testimones-card__customer-info">
        <img
          className="testimones-card__customer-img"
          src={customerImg}
          alt="image of customer"
        />
        <h4 className="testimones-card__customer-name">{name}</h4>
        <p className="testimones-card__customer-location">{location}</p>
      </div>
    </div>
  );
}

export default TestimoniesCard;

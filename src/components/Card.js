import React from "react";
// import "../images/detroit-murals.jpeg";
// As bookmark image remains the same for all cards, not passing it as value from App.js
import BookmarkImage from "../images/bookmark-logo.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-image" alt="detroit murals" />
      <div className="card-stats">
        <img
          src={BookmarkImage}
          className="card-bookmark"
          alt="bookmark icon"
        />
        <span>{props.rating} &nbsp;</span>
        <span className="card-span-gray">
          ({props.reviewCount}) &bull; &nbsp;
        </span>
        <span className="card-span-gray">{props.city}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="span-price-bold">From &#x24;{props.price}</span>/person
      </p>
    </div>
  );
}

export default Card;

import React from "react";
// import "../images/detroit-murals.jpeg";
// As bookmark image remains the same for all cards, not passing it as value from App.js
import BookmarkImage from "../images/bookmark-logo.png";

function Card(props) {
  // Multi line conditional rendering logic
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.city === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {/* Conditional rendering of SOLD OUT badge information */}
      {/* {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>} */}
      {badgeText && <div className="card-badge">{badgeText}</div>}
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

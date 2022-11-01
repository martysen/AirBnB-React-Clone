import React from "react";
import ExoImage1 from "../images/detroit-murals.jpeg";
import BookmarkImage from "../images/bookmark-logo.png";

/**
 * Card component static steps
 * 0. a div container to wrap everything below
 * 1. image
 * 2. bookmark logo, rating, review count [a separate div]
 * 3. title [a para]
 * 4. cost/person [a para]
 *
 */

function CardStatic() {
  return (
    <div className="card">
      <img src={ExoImage1} className="card-image" alt="detroit murals" />
      <div className="card-stats">
        <img
          src={BookmarkImage}
          className="card-bookmark"
          alt="bookmark icon"
        />
        <span>4.90</span>
        <span className="card-span-gray">(20) &bull; </span>
        <span className="card-span-gray">Detroit</span>
      </div>
      <p>See Detroit's Murals on an Electric Bikes</p>
      <p>
        <span className="span-price-bold">From &#x24;100</span>/person
      </p>
    </div>
  );
}

export default CardStatic;

// Import
import React from "react";
import "./OtherCard.css";

const OtherVisibleCard = props => {
  // Destructure
  const { image, suit, value } = props.card;

  // Display
  return <img className="othervisible" src={image} alt={suit + " " + value} />;
};

export default OtherVisibleCard;

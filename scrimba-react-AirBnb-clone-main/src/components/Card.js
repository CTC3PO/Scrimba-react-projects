import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.items.location === "Online") {
    badText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`./public/images/${props.item.coverImg}`}
        className="card-image"
      />
      <div className="card-info">
        <img src="./public/images/star.png" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.viewCount}) * </span>
        <span className="gray">{probs.item.openSpots}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price}</span>/person
      </p>
    </div>
  );
}

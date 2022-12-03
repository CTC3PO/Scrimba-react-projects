import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`./public/images/${props.item.coverImage}`}
        className="card-image"
        alt="photo"
      />
      <div className="card-info">
        <div className="card-info-heading">
          <span>
            <img
              src=".public/images/location-icon.png"
              className="card-location-icon"
            />
          </span>
          <span>{props.item.location}</span>
          <span className="gray">
            <a className="google-link" href={props.item.googleMapsUrl}>
              View on Google Maps
            </a>
          </span>
        </div>
        <div className="card-title">{props.item.title}</div>
        <div className="card-date">
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="card-description">{props.item.description}</div>
      </div>
    </div>
  );
}

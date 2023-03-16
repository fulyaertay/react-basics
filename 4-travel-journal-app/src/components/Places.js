import React from "react";

export default function Places(props) {
  return (
    <div className="card--list">
      <img src={props.item.img} className="travel--image"></img>
      <div className="place--content">
        <div className="places--content-header">
          <img src="../images/location.png" className="location--logo"></img>
          <p>{props.item.location}</p>
          <p className="view--maps">View on Google Maps</p>
        </div>
        <div>
        <p>{props.item.location}</p>
        </div>
        <div>
        <p>{props.item.location}</p>
        </div>
      </div>
    </div>
  );
}

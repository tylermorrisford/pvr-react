import React from "react";

const Card = (props) => {

    return(
        <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img alt={props.data.cottageName} src={props.data.cottageImage} />
            <span className="card-title cottage-title">{props.data.cottageName}</span>
          </div>
          <div className="card-content">
            <p>{props.data.cottageSlug}</p><br/>
            <p>Sleeps {props.data.cottageSleeps} in {props.data.cottageLocation}</p>
          </div>
          <div className="card-action card-link">
            <p>View More > </p>
          </div>
        </div>
      </div>
    )
} // use price per night instead of sleeps/location

export default Card
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
            <p>${props.data.cottagePerNight}/night</p>
          </div>
          <div className="card-action card-link">
            <p>View More > </p>
          </div>
        </div>
      </div>
    )
} // use Link to load CottagePage based on {props.data.cottageId}; use wk 20 # 11 as base

export default Card
import React from "react";
import { Link } from "react-router-dom";

const ReservationCard = (props) => {

    return(

        <div className="card">
          <div className="card-image">
            <img alt={props.data.cottageName} src={props.data.cottageImage} />
            <span className="card-title cottage-title">{props.data.cottageName}</span>
          </div>
          <div className="card-content">
            <p>Your {props.resLength}-night stay at {props.data.cottageName} in {props.data.cottageLocation}{" "} 
            totals ${(props.resLength * props.data.cottagePerNight)}</p>
          </div>
        </div>

    )
}

export default ReservationCard
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
            <p>For your {props.resLength}-night stay at {props.data.cottageName} in {props.data.cottageLocation}:<br />
            subtotal ${ props.resLength === 6 ? props.data.cottagePerWeek : (props.resLength * props.data.cottagePerNight)}</p>
          </div>
        </div>

    )
}

export default ReservationCard
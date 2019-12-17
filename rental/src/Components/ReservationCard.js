import React from "react";
import { Link } from "react-router-dom";

const ReservationCard = (props) => {

    const resSubtotal = props.resLength === 7 ? props.data.cottagePerWeek : props.resLength * props.data.cottagePerNight;
    const tax = parseFloat((resSubtotal * 0.06).toFixed(2));
    const resGrandTotal = resSubtotal + 125 + tax + 25;    

    console.log('resTotal: ', resSubtotal, 'tax: ', tax);

    return(

        <div className="card">
          <div className="card-image">
            <img alt={props.data.cottageName} src={props.data.cottageImage} />
            <span className="card-title cottage-title">{props.data.cottageName}</span>
          </div>
          <div className="card-content">
            <p>For your {props.resLength}-night stay at {props.data.cottageName} in {props.data.cottageLocation}:<br /><hr className="hr"/>
            Subtotal ${ resSubtotal}</p>
            <p>Cleaning Fee: $125</p>
            <p>Taxes: ${tax}</p>
            <p>Total for this reservation: ${resGrandTotal}</p>
          </div>
        </div>

    )
}

export default ReservationCard
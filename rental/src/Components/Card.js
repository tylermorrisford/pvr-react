import React from "react";
import { Link } from "react-router-dom";

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
            <p>${props.data.cottagePerNight}/night  
            <span> | </span><span>
            <Link to={"/cottages/" + props.data._id}>
              View More >
            </Link></span></p>
          </div>

        </div>
      </div>
    )
}

export default Card
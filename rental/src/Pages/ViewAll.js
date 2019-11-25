import React from "react";
import cottages from "../Components/cottages";
import Card from "../Components/Card";

const ViewAll = () => {

        let allCottages = cottages.map((cottage,i) => (
            <Card key={i} data={cottage} />
            ))

        return(
            <div className="container">
                <h3>All Rentals</h3>
                <div className="row flex-container">
                {allCottages}
                </div>
            </div>
        )
    
}

export default ViewAll;
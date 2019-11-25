import React from "react";
import Card from "../Components/Card";
import cottages from "../Components/cottages";

const Destinations = () => {

    // Leland
let leland = cottages.filter(el => el.cottageLocation === "Leland" );
let lelandCottages = leland.map((cottage, i) =>  <Card key={i} data={cottage} />);
    // Lake Leelanau
let leelanau = cottages.filter(lc => lc.cottageLocation === "Lake Leelanau" );
let leelanauCottages = leelanau.map((cottage, i) => <Card key={i} data={cottage} />);


        return(
            <div className="container">
               <h3>Leland</h3> 
                <div className="row flex-container">
                   {lelandCottages}
                </div><hr/>
               <h3>Lake Leelanau</h3> 
                <div className="row flex-container">
                   {leelanauCottages}
                </div>
            </div>
        )
    }
    

export default Destinations
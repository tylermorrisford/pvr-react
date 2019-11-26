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
    // Northport
let northport = cottages.filter(np => np.cottageLocation === "Northport" );
let northportCottages = northport.map((cottage, i) => <Card key={i} data={cottage} />);
    // Lake Michigan
let lakeMichigan = cottages.filter(lm => lm.cottageLocation === "Lake Michigan" );
let lakeMichiganCottages = lakeMichigan.map((cottage, i) => <Card key={i} data={cottage} />);
    // Little Traverse Lake
let littleTraverse = cottages.filter(lt => lt.cottageLocation === "Little Traverse Lake" );
let littleTraverseCottages = littleTraverse.map((cottage, i) => <Card key={i} data={cottage} />);


        return(
            <div className="container">
               <h3>Leland</h3> 
                <div className="row flex-container">
                   {lelandCottages}
                </div><hr/>
               <h3>Lake Leelanau</h3> 
                <div className="row flex-container">
                   {leelanauCottages}
                </div><hr/>
               <h3>Northport</h3> 
                <div className="row flex-container">
                   {northportCottages}
                </div><hr/>
               <h3>Lake Michigan</h3> 
                <div className="row flex-container">
                   {lakeMichiganCottages}
                </div><hr/>
               <h3>Little Traverse Lake</h3> 
                <div className="row flex-container">
                   {littleTraverseCottages}
                </div>
            </div>
        )
    }
    

export default Destinations
import React, {Component} from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);


class Destinations extends Component {
    constructor() {
        super();
        this.state = {
            cottages: [],
            ready: false
    }
    } 

    componentDidMount() {
        API.getCottages()
            .then(res => this.setState({ 
                cottages: res.data,
                ready: true 
            }))
            .catch(err => console.log(err));
          }
 // split this component into five, add to drop-down from nav menu

render() {
    
        // Leland
    const leland = this.state.cottages.filter(el => el.cottageLocation === "Leland" );
    const lelandCottages = leland.map((cottage, i) =>  <Card key={i} data={cottage} />);
        // Lake Leelanau
    const leelanau = this.state.cottages.filter(lc => lc.cottageLocation === "Lake Leelanau" );
    const leelanauCottages = leelanau.map((cottage, i) => <Card key={i} data={cottage} />);
        // Northport
    const northport = this.state.cottages.filter(np => np.cottageLocation === "Northport" );
    const northportCottages = northport.map((cottage, i) => <Card key={i} data={cottage} />);
        // Lake Michigan
    const lakeMichigan = this.state.cottages.filter(lm => lm.cottageLocation === "Lake Michigan" );
    const lakeMichiganCottages = lakeMichigan.map((cottage, i) => <Card key={i} data={cottage} />);
        // Little Traverse Lake
    const littleTraverse = this.state.cottages.filter(lt => lt.cottageLocation === "Little Traverse Lake" );
    const littleTraverseCottages = littleTraverse.map((cottage, i) => <Card key={i} data={cottage} />);
    
  
    if(!this.state.ready) {
        // spinner "circle-notch"
        return(
            <div className="spinner-wrapper">
                <FontAwesomeIcon icon="circle-notch" size="6x" spin />
            </div>
        )
    }
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
    
}
    

export default Destinations
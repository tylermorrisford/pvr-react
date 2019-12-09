import React, {Component} from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class Leland extends Component{
    constructor(){
        super() 
        this.state = {
            cottages: {},
            ready: false
        }
    }

    componentDidMount(){
        API.getCottages()
        .then(res => this.setState({ 
            cottages: res.data,
            ready: true 
        }))
        .catch(err => console.log(err));
    }

    render() {
    
        // Leland
    const leland = this.state.cottages.filter(el => el.cottageLocation === "Leland" );
    const lelandCottages = leland.map((cottage, i) =>  <Card key={i} data={cottage} />);
      
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
                </div>
            )
}


}

export default Leland
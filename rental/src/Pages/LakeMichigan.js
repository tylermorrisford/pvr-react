import React, {Component} from "react";
import Card from "../Components/Card";
import API from "../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

class LakeMichigan extends Component{
    constructor(){
        super() 
        this.state = {
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
    
        // Lake Michigan
    const lakeMichigan = this.state.cottages.filter(lm => lm.cottageLocation === "Lake Michigan" );
    const lakeMichiganCottages = lakeMichigan.map((cottage, i) => <Card key={i} data={cottage} />);
    
  
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
                   <h3>Lake Michigan</h3> 
                    <div className="row flex-container">
                       {lakeMichiganCottages}
                    </div><hr/>
                </div>
            )
}


}

export default LakeMichigan
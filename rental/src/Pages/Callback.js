import React, {Component} from "react";
import Auth from "../Auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleNotch);

export default class Callback extends Component{
    
    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }
    
    render() {
        return (
            <div className="spinner-wrapper">
                <FontAwesomeIcon icon="circle-notch" size="6x" spin />
                <p>Loading...</p>
            </div>
        )
    }
}
import React, {Component} from "react";
import cottages from "../Components/cottages";
 
class CottagePage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <h1>Cottage Page</h1>   // Need to use route, filter cottages to id, load this component
        )
    }

}

export default CottagePage
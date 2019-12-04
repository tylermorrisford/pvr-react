import React, {Component} from "react";
import { Link } from "react-router-dom";
import cottages from "../Components/cottages";
import API from "../utils/API";
 
class CottagePage extends Component{
        state = {
            cottage: {}
        }
    

    componentDidMount() {
        API.getCottage(this.props.match.params.id)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));
          }
// Need to use route, load this component
    render() {
        return(
            <div>
            <h1>Single Cottage Page</h1>   
            <h3>{this.state.cottage.cottageName} | {this.state.cottage.cottageLocation}</h3>
            <div>booking calendar</div>
            <button>Book ></button>
            </div>
        )
    }

}

export default CottagePage
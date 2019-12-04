import React, {Component} from "react";
// import React from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
 
class CottagePage extends Component{
        state = {
            cottage: {}
        }
    // const CottagePage = (props) => {

    componentDidMount() {
        API.getCottage(this.props.match.params.id)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));
          }
// Need to use route, load this component
    render() {
        return(
            <div>
            <h1>{this.state.cottage.cottageName}</h1>   
            <img alt="cottagePhoto" src={this.state.cottage.cottageImage} />
            <h3>{this.state.cottage.cottageName} | {this.state.cottage.cottageLocation}</h3>
            <p>{this.state.cottage.cottageDescription}</p>
            <div>booking calendar</div>
            <button>Book ></button>
            </div>
        )
    }

}

export default CottagePage
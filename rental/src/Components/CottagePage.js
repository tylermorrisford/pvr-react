import React, {Component} from "react";
// import { Link } from "react-router-dom";
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
            <div className="container">
            <h1>{this.state.cottage.cottageName}</h1>   
            <img alt="cottagePhoto" src={this.state.cottage.cottageImage} />
            <h5>Sleeps: {this.state.cottage.cottageSleeps}, Beds: {this.state.cottage.cottageBedrooms}, Baths:{this.state.cottage.cottageBathrooms}</h5>
            <p>{this.state.cottage.cottageDescription}</p>
            <div> booking calendar goes here </div>
            <button className="waves-effect waves-light btn">Book ></button>
            </div>
        )
    }

}

export default CottagePage
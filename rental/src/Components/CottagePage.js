import React, {Component} from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
// import BookingCalendar from "./BookingCalendar";
import DateRangeCalendar from "./DateRangeCalendar";
 
class CottagePage extends Component{
        state = {
            cottage: {}
        }

    componentDidMount() {
        API.getCottage(this.props.match.params.id)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));
          }

    onClick() {
        // api. booking dates to db, update 
    }     
// Need to use route, load this component
    render() {
        return(
            <div className="container">
                <h1>{this.state.cottage.cottageName}</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <img alt="cottagePhoto" src={this.state.cottage.cottageImage} />

                    </div>
                    <div className="col s12 m6">
                        <div className="center"><DateRangeCalendar /><br/>
                        <button className="waves-effect waves-light btn">Book Your Stay ></button></div>

                    </div>
                </div>
                <h5>{this.state.cottage.cottageSlug}</h5>
                <h6>Sleeps: {this.state.cottage.cottageSleeps}, Beds: {this.state.cottage.cottageBedrooms}, Baths: {this.state.cottage.cottageBathrooms}</h6>
                <p>{this.state.cottage.cottageDescription}</p>
            </div>
        )
    }

}

export default CottagePage
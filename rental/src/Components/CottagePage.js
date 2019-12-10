import React, {Component} from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
// import DateRangeCalendar from "./DateRangeCalendar";
import Calendar from "./Calendar";
// import Iframe from 'react-iframe';
// import dotenv from 'dotenv';
 
class CottagePage extends Component{
        state = {
            cottage: {},
        }

    componentDidMount() {
        API.getCottage(this.props.match.params.id)
            .then(res => this.setState({ cottage: res.data }))
            .catch(err => console.log(err));
          }
   

    render() {
        return(
            <div className="container">
                <h1>{this.state.cottage.cottageName}</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <img alt="cottagePhoto" src={this.state.cottage.cottageImage} />

                    </div>
                    <div className="col s12 m6">
                <h5>{this.state.cottage.cottageSlug}</h5>
                <h5>Sleeps: {this.state.cottage.cottageSleeps}<br/>Beds: {this.state.cottage.cottageBedrooms}<br />Baths: {this.state.cottage.cottageBathrooms}</h5>
                        </div>

                    </div>
                        <div className="center"><Calendar data={this.state.cottage}/><br/>
                </div>
                <p>{this.state.cottage.cottageDescription}</p>
                {/* <Iframe 
                    url={this.state.cottage.cottageMap}
                    width="600" 
                    height="450" 
                    frameborder="0" 
                    style="border:0"
                    /> */}
            </div>
        )
    }
}

// add map using google map js api

export default CottagePage